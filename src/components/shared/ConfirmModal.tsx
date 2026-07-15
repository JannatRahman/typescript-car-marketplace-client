"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

import Button from "./Button";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onCancel}
          className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            bg-black/60
            backdrop-blur-sm

            p-5
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              w-full
              max-w-md

              rounded-3xl

              border
              border-[var(--border)]

              bg-[var(--surface)]

              p-8

              shadow-2xl
            "
          >
            {/* Icon */}

            <div className="flex justify-center">
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center

                  rounded-full

                  bg-red-100
                  text-red-600
                "
              >
                <AlertTriangle size={38} />
              </div>
            </div>

            {/* Title */}

            <h2
              className="
                mt-6

                text-center

                text-2xl
                font-bold

                text-[var(--foreground)]
              "
            >
              {title}
            </h2>

            {/* Message */}

            <p
              className="
                mt-4

                text-center

                leading-7

                text-[var(--foreground-muted)]
              "
            >
              {message}
            </p>

            {/* Actions */}

            <div className="mt-8 flex gap-4">
              <Button
                variant="secondary"
                onClick={onCancel}
                className="flex-1"
              >
                Cancel
              </Button>

              <Button
                variant="danger"
                onClick={onConfirm}
                className="flex-1"
              >
                Delete
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;