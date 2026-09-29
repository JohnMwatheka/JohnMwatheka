// components/contact/SuccessModal.tsx

"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="raised relative w-full max-w-sm overflow-hidden rounded-[28px] border border-[rgba(0,0,0,0.06)] bg-background p-8 dark:border-[rgba(255,255,255,0.08)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 h-40 w-40">
              <DotLottieReact
                src="https://lottie.host/c1028639-7bac-4fa1-991f-f9eb00c49063/sLQsXmZ9Yh.lottie"
                loop
                autoplay
              />
            </div>

            <p className="mb-1 text-center text-[15px] tracking-wide text-primary">
              Message sent
            </p>
            <p className="mb-8 text-center text-[13px] tracking-wide text-secondary">
              I’ll get back to you soon.
            </p>

            <button
              onClick={onClose}
              className="raised mx-auto block rounded-16px px-8 py-3 text-[13px] tracking-wide text-primary transition-all duration-200 hover:-translate-y-px"
            >
              CLOSE
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}