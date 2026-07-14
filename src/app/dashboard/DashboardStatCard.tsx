import { ReactNode } from "react";

interface Props {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
}

export default function DashboardStatCard({
  title,
  value,
  subtitle,
  icon,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-[var(--border)]
      bg-[var(--card)]
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
    >
      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-[var(--muted)]">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-[var(--muted)]">
              {subtitle}
            </p>
          )}

        </div>

        <div
          className="
          rounded-2xl
          bg-blue-100
          p-4
          text-[var(--primary)]
          dark:bg-blue-900/30
        "
        >
          {icon}
        </div>

      </div>
    </div>
  );
}