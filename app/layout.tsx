// app/layout.tsx

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mwatheka.5devs.co.ke"),
  title: {
    default: "Abraham Mwatheka — Full-Stack Software Engineer",
    template: "%s | Abraham Mwatheka",
  },
  description:
    "Abraham Mwatheka (Mwatheka John) is a full-stack software engineer based in Nairobi, Kenya. Specializing in Next.js, React, Laravel, TypeScript, and production-grade web & mobile applications.",
  keywords: [
    "Abraham Mwatheka",
    "Mwatheka John",
    "Mwatheka",
    "Abraham",
    "John Mwatheka",
    "software engineer",
    "full-stack developer",
    "fullstack developer",
    "software developer",
    "web developer",
    "react developer",
    "next.js developer",
    "laravel developer",
    "typescript developer",
    "node.js developer",
    "junior software engineer",
    "mid level software engineer",
    "senior software engineer",
    "software developer Nairobi",
    "full stack developer Nairobi",
    "developer Nairobi Kenya",
    "Nairobi software engineer",
    "Kenya software developer",
    "React Native developer",
    "PostgreSQL developer",
    "M-Pesa integration",
    "portfolio",
    "mwatheka.5devs.co.ke",
  ],
  authors: [{ name: "Abraham Mwatheka", url: "https://mwatheka.5devs.co.ke" }],
  creator: "Abraham Mwatheka",
  publisher: "Abraham Mwatheka",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://mwatheka.5devs.co.ke",
    siteName: "Abraham Mwatheka",
    title: "Abraham Mwatheka — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer based in Nairobi, Kenya. Building production systems with Next.js, React, Laravel, and TypeScript.",
    images: [
      {
        url: "/abraham.png",
        width: 800,
        height: 800,
        alt: "Abraham Mwatheka — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abraham Mwatheka — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer based in Nairobi, Kenya. Next.js · React · Laravel · TypeScript.",
    images: ["/abraham.png"],
    creator: "@Johnmwatheka",
  },
  alternates: {
    canonical: "https://mwatheka.5devs.co.ke",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem("theme");
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

                  if (saved === "dark" || (!saved && prefersDark)) {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}