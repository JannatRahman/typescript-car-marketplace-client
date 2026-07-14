"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Car,
  PlusCircle,
  House,
  LogOut,
  UserCircle2,
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";

const links = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Add Car",
    href: "/dashboard/add-car",
    icon: PlusCircle,
  },
  {
    title: "Manage Cars",
    href: "/manage-cars",
    icon: Car,
  },
  {
    title: "Marketplace",
    href: "/",
    icon: House,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  const router = useRouter();

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();

    router.push("/");
  };

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white dark:border-gray-800 dark:bg-gray-950">

      {/* Logo */}

      <div className="border-b p-6">

        <h1 className="text-3xl font-bold">
          Drive
          <span className="text-[var(--primary)]">
            Mart
          </span>
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Car Marketplace
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex flex-1 flex-col gap-2 p-4">

        {links.map((link) => {
          const Icon = link.icon;

          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition
              ${
                active
                  ? "bg-[var(--primary)] text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Icon size={20} />

              {link.title}
            </Link>
          );
        })}

      </nav>

      {/* Bottom Section */}

      <div className="border-t p-4">

        <div className="mb-4 flex items-center gap-3">

          <UserCircle2
            size={42}
            className="text-[var(--primary)]"
          />

          <div>

            <h3 className="font-semibold">
              {user?.name}
            </h3>

            <p className="text-sm text-gray-500">
              Seller Account
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-red-600 transition hover:bg-red-100 dark:bg-red-950 dark:hover:bg-red-900"
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
}