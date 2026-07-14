import clsx from "clsx";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
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

        rounded-2xl

        px-6
        py-3

        font-semibold

        transition-all
        duration-200

        disabled:opacity-50
        disabled:cursor-not-allowed
        `,
        variant === "primary"
          ? `
            bg-[var(--primary)]
            text-white

            hover:bg-blue-700
            `
          : `
            border
            border-[var(--border)]

            bg-[var(--surface)]

            text-[var(--foreground)]

            hover:bg-[var(--surface-secondary)]
            `,
        className
      )}
    >
      {children}
    </button>
  );
}