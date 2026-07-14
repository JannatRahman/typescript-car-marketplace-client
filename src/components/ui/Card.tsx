import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        `
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        shadow-md
        `,
        className
      )}
    >
      {children}
    </div>
  );
}