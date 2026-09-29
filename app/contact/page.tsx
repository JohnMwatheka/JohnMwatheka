// app/contact/page.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ContactLinks from "@/components/contact/ContactLinks";
import ContactForm from "@/components/contact/ContactForm";
import SuccessModal from "@/components/contact/SuccessModal";

export default function ContactPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-background text-primary">
      <section className="mx-auto max-w-2xl px-8 pb-32 pt-16 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="mb-12 text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-tight text-primary">
            Contact
          </h1>

          <ContactLinks />

          <ContactForm onSuccess={() => setShowModal(true)} />

          <div className="mt-20">
            <Link
              href="/"
              className="text-[13px] tracking-wide text-secondary transition-all duration-200 hover:-translate-y-px hover:text-primary"
            >
              ← Back home
            </Link>
          </div>
        </motion.div>
      </section>

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}