// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ─────────────────────────────────────────────
// 1. Zod Schema
// ─────────────────────────────────────────────
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(2000, "Message is too long"),
  website: z.string().max(0).optional(), // honeypot
});

// ─────────────────────────────────────────────
// 2. Rate limiting
// ─────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  record.count += 1;
  rateLimitMap.set(ip, record);

  return record.count > MAX_REQUESTS;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now - record.lastReset > RATE_LIMIT_WINDOW * 2) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

// ─────────────────────────────────────────────
// 3. Helper to send email via Mailtrap
// ─────────────────────────────────────────────
async function sendMailtrapEmail(payload: object, token: string) {
  const response = await fetch("https://send.api.mailtrap.io/api/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    console.error("Mailtrap error:", errorData);
    throw new Error("Failed to send email");
  }

  return response.json();
}

// ─────────────────────────────────────────────
// 4. API Handler
// ─────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    // Validate
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Honeypot
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true });
    }

    const mailtrapToken = process.env.MAILTRAP_API_TOKEN;
    if (!mailtrapToken) {
      console.error("MAILTRAP_API_TOKEN is missing");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // ─────────────────────────────────────
    // A. Email to you
    // ─────────────────────────────────────
    const teamEmail = {
      from: {
        email: "hello@5devs.co.ke",
        name: "Portfolio Contact",
      },
      to: [{ email: "abrahammwatheka@gmail.com" }],
      subject: `New message from ${data.name}`,
      text: `
New Contact Form Submission
===========================

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
      `.trim(),
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1D1D1F;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0;"><strong>Name:</strong></td><td>${data.name}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${data.email}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      `,
      category: "Portfolio Contact - Team",
    };

    // ─────────────────────────────────────
    // B. Auto-reply to the sender
    // ─────────────────────────────────────
    const autoReply = {
      from: {
        email: "hello@5devs.co.ke",
        name: "Abraham Mwatheka",
      },
      to: [{ email: data.email }],
      subject: "I've received your message – Abraham Mwatheka",
      text: `
Hi ${data.name},

Thank you for reaching out.

I've received your message and will get back to you as soon as possible.

Best regards,
Abraham Mwatheka
Software Engineer
https://mwatheka.5devs.co.ke
      `.trim(),
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #1D1D1F;">
          <div style="padding: 32px 24px;">
            <p style="font-size: 16px;">Hi ${data.name},</p>

            <p style="font-size: 16px; line-height: 1.6;">
              Thank you for reaching out.
            </p>

            <p style="font-size: 16px; line-height: 1.6;">
              I've received your message and will get back to you as soon as possible.
            </p>

            <p style="font-size: 16px; margin-top: 28px;">
              Best regards,<br />
              <strong>Abraham Mwatheka</strong><br />
              <span style="color: #888; font-size: 14px;">Software Engineer</span><br />
              <a href="https://mwatheka.5devs.co.ke" style="color: #1D1D1F; font-size: 13px;">mwatheka.5devs.co.ke</a>
            </p>
          </div>
        </div>
      `,
      category: "Portfolio Contact - Auto Reply",
    };

    // Send both emails
    await Promise.all([
      sendMailtrapEmail(teamEmail, mailtrapToken),
      sendMailtrapEmail(autoReply, mailtrapToken),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}