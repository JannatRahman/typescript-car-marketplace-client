import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          {...props}
          className={clsx(
            `
            w-full
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            px-4
            py-3

            text-[var(--foreground)]
            placeholder:text-[var(--foreground-muted)]

            outline-none

            transition-all
            duration-200

            focus:border-[var(--primary)]
            focus:ring-4
            focus:ring-blue-100

            dark:focus:ring-blue-900/30
            `,
            className
          )}
        />

        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )}
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;