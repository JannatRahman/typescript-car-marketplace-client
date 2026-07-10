import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer",
        variant === "primary"
          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-1 hover:bg-blue-700"
          : "border border-blue-600 bg-white text-blue-600 hover:-translate-y-1 hover:bg-blue-600 hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;