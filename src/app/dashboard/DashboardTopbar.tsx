"use client";

import { Menu } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import ThemeToggle from "@/components/navbar/ThemeToggle";

export default function DashboardTopbar() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-white/80 px-8 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/80">

      {/* Left */}

      <div className="flex items-center gap-4">

        {/* <button className="lg:hidden">
          <Menu size={28} />
        </button> */}

        <div>

          <h2 className="text-2xl font-bold">
            Dashboard
          </h2>

          <p className="text-sm text-gray-500">
            Manage your marketplace
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <ThemeToggle />

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-white font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold">
              {user?.name}
            </h3>

            <p className="text-sm text-gray-500">
              Seller
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}