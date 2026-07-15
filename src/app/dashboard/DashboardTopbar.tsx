"use client";

import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import ThemeToggle from "@/components/navbar/ThemeToggle";

const pageTitles: Record<
  string,
  {
    title: string;
    subtitle: string;
  }
> = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Welcome back! Manage your marketplace.",
  },
  "/dashboard/add-car": {
    title: "Add Car",
    subtitle: "Create a new premium vehicle listing.",
  },
  "/manage-cars": {
    title: "Manage Cars",
    subtitle: "Edit, update or remove your listings.",
  },
};

export default function DashboardTopbar() {
  const pathname = usePathname();
  const { user } = useAuth();

  const page =
    pageTitles[pathname] || {
      title: "Dashboard",
      subtitle: "Manage your marketplace.",
    };

  return (
    <header
      className="
        sticky
        top-0
        z-30
        flex
        h-20
        items-center
        justify-between
        border-b
        border-[var(--border)]
        bg-[color:color-mix(in_srgb,var(--background)_90%,transparent)]
        px-8
        backdrop-blur-xl
        shadow-sm
      "
    >
      {/* Left */}
      <div>
        <h1
          className="
            text-3xl
            font-black
            tracking-tight
            text-[var(--foreground)]
          "
        >
          {page.title}
        </h1>

        <p
          className="
            mt-1
            text-sm
            text-[var(--foreground-muted)]
          "
        >
          {page.subtitle}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <ThemeToggle />

        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[var(--primary)]
              text-base
              font-bold
              text-white
              ring-4
              ring-[var(--surface-secondary)]
            "
          >
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div className="hidden md:block">
            <h3
              className="
                font-bold
                text-[var(--foreground)]
              "
            >
              {user?.name}
            </h3>

            <span
              className="
                mt-1
                inline-flex
                rounded-full
                bg-[var(--surface-secondary)]
                px-3
                py-1
                text-xs
                font-semibold
                text-[var(--primary)]
              "
            >
              Seller Account
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}