import clsx from "clsx";
import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-xl

        px-6
        py-3

        text-sm
        font-semibold

        cursor-pointer
        select-none

        transition-all
        duration-300

        active:scale-[0.98]
        hover:-translate-y-0.5

        focus:outline-none
        focus:ring-2
        focus:ring-[var(--primary)]
        focus:ring-offset-2
        focus:ring-offset-[var(--background)]

        disabled:pointer-events-none
        disabled:opacity-50
        disabled:translate-y-0
        disabled:scale-100
        `,
        {
          // Primary
          "bg-[var(--primary)] text-white shadow-lg hover:brightness-110 hover:shadow-xl":
            variant === "primary",

          // Secondary
          "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm hover:bg-[var(--surface-secondary)] hover:shadow-md":
            variant === "secondary",

          // Danger
          "bg-[var(--danger)] text-white shadow-lg hover:brightness-110 hover:shadow-xl":
            variant === "danger",
        },
        className
      )}
    >
      {children}
    </button>
  );
}