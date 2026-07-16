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
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

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

  

    const handleLogout = async () => {
      try {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
              router.refresh();
            },
          },
        });
      } catch (err) {
        if(err){
               toast.error('something is Wrong') 
              }
        // console.error("Logout failed:", error);
      }
      
    };

  return (
    <aside
      className="
        flex
        h-screen
        w-84
        flex-col
        border-r
        border-[var(--border)]
        bg-[var(--card)]
      "
    >
      {/* Logo */}

      <div className="border-b border-[var(--border)] p-6">
        <h1 className="text-3xl font-black text-[var(--foreground)]">
          Drive
          <span className="text-[var(--primary)]">
            Mart
          </span>
        </h1>

        <p className="mt-1 text-sm text-[var(--foreground-muted)]">
          Premium Car Marketplace
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
              className={`
                flex
                items-center
                gap-3
                rounded-2xl
                px-4
                py-3
                font-medium
                transition-all
                duration-200
                ${
                  active
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "text-[var(--foreground)] hover:bg-[var(--surface-secondary)]"
                }
              `}
            >
              <Icon size={20} />
              {link.title}
            </Link>
          );
        })}
      </nav>

      {/* User */}

      <div className="border-t border-[var(--border)] p-5">
        <div className="mb-5 flex items-center gap-3">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[var(--surface-secondary)]
            "
          >
            <UserCircle2
              size={34}
              className="text-[var(--primary)]"
            />
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-semibold text-[var(--foreground)]">
              {user?.name ?? "Guest"}
            </h3>

            <p className="truncate text-sm text-[var(--foreground-muted)]">
              Seller Account
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="
            flex
            w-full
            cursor-pointer
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-red-500
            px-4
            py-3
            font-semibold
            text-red-500
            transition-all
            duration-200
            hover:bg-red-500
            hover:text-white
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}