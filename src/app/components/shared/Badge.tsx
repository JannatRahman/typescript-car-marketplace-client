import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-semibold">
      {children}
    </span>
  );
};

export default Badge;