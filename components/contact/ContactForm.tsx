// components/contact/ContactForm.tsx

"use client";

import { useState } from "react";
import AlertModal from "./AlertModal";

type FormState = "idle" | "submitting" | "error";

type ContactFormProps = {
  onSuccess: () => void;
};

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website) return;

    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setFormData({
        name: "",
        email: "",
        message: "",
        website: "",
      });
      setFormState("idle");
      onSuccess();
    } catch {
      setFormState("error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Honeypot – hidden from real users */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[13px] tracking-wide text-secondary"
          >
            NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-12px border border-[rgba(0,0,0,0.12)] bg-transparent px-5 py-4 text-[15px] tracking-wide text-primary outline-none transition-colors placeholder:text-secondary focus:border-primary dark:border-[rgba(255,255,255,0.18)] dark:focus:border-white"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[13px] tracking-wide text-secondary"
          >
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-12px border border-[rgba(0,0,0,0.12)] bg-transparent px-5 py-4 text-[15px] tracking-wide text-primary outline-none transition-colors placeholder:text-secondary focus:border-primary dark:border-[rgba(255,255,255,0.18)] dark:focus:border-white"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-[13px] tracking-wide text-secondary"
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full resize-none rounded-12px border border-[rgba(0,0,0,0.12)] bg-transparent px-5 py-4 text-[15px] tracking-wide text-primary outline-none transition-colors placeholder:text-secondary focus:border-primary dark:border-[rgba(255,255,255,0.18)] dark:focus:border-white"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          disabled={formState === "submitting"}
          className="raised rounded-[18px] px-8 py-4 text-[13px] tracking-wide text-primary transition-all duration-200 hover:-translate-y-px disabled:opacity-50"
        >
          SEND MESSAGE
        </button>
      </form>

      {/* Loading modal */}
      <AlertModal isOpen={formState === "submitting"} type="loading" />

      {/* Error modal */}
      <AlertModal
        isOpen={formState === "error"}
        type="error"
        message="Please try again in a moment."
        onClose={() => setFormState("idle")}
      />
    </>
  );
}