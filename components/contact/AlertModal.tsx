// components/contact/AlertModal.tsx

"use client";

import { motion, AnimatePresence } from "framer-motion";

type AlertType = "loading" | "error";

type AlertModalProps = {
  isOpen: boolean;
  type: AlertType;
  message?: string;
  onClose?: () => void;
};

export default function AlertModal({
  isOpen,
  type,
  message,
  onClose,
}: AlertModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm"
          onClick={type === "error" ? onClose : undefined}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="raised relative w-full max-w-sm overflow-hidden rounded-[28px] border border-[rgba(0,0,0,0.06)] bg-background p-8 dark:border-[rgba(255,255,255,0.08)]"
            onClick={(e) => e.stopPropagation()}
          >
            {type === "loading" ? (
              <div className="flex flex-col items-center py-4">
                {/* Spinner */}
                <div className="mb-6 h-10 w-10 animate-spin rounded-full border-2 border-secondary border-t-primary" />
                <p className="text-center text-[15px] tracking-wide text-primary">
                  Sending message...
                </p>
                <p className="mt-2 text-center text-[13px] tracking-wide text-secondary">
                  Please wait
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center py-2">
                {/* Error icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>

                <p className="mb-1 text-center text-[15px] tracking-wide text-primary">
                  Something went wrong
                </p>
                <p className="mb-8 text-center text-[13px] tracking-wide text-secondary">
                  {message || "Please try again in a moment."}
                </p>

                <button
                  onClick={onClose}
                  className="raised rounded-2xl px-8 py-3 text-[13px] tracking-wide text-primary transition-all duration-200 hover:-translate-y-px"
                >
                  CLOSE
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}