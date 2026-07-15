"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  LogIn,
  UserPlus,
  Moon,
} from "lucide-react";

import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

interface MobileMenuProps {
  user: {
    name: string;
    email: string;
  } | null;
  logout: () => void;
}

const MobileMenu = ({
  user,
  logout,
}: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="
        flex
        h-11
        w-11
        items-center
        justify-center

        rounded-2xl

        border
        border-[var(--border)]

        bg-[var(--card)]

        transition

        hover:bg-[var(--surface-secondary)]
      "
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}

      <div
        className={`fixed inset-0 z-50 transition ${
          open
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        {/* Background */}

        <div
          onClick={() => setOpen(false)}
          className={`
            absolute
            inset-0
            bg-black/50
            backdrop-blur-sm

            transition-opacity

            ${
              open
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

        {/* Drawer */}

        <div
          className={`
          absolute
          right-0
          top-0

          flex
          h-full
          w-[320px]
          flex-col

          border-l
          border-[var(--border)]

         bg-white dark:bg-slate-950

          shadow-2xl

          transition-transform
          duration-300

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b border-[var(--border)] p-6">

            <div>

              <h2 className="text-xl font-bold">
                Drive
                <span className="text-[var(--primary)]">
                  Mart
                </span>
              </h2>

              <p className="text-sm text-[var(--muted)]">
                Premium Marketplace
              </p>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-xl p-2 hover:bg-[var(--surface-secondary)]"
            >
              <X size={22} />
            </button>

          </div>

          {/* User */}

          {user && (
            <div className="border-b border-[var(--border)] p-6">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold text-white">
                  {user.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-semibold">
                    {user.name}
                  </h3>

                  <p className="text-sm text-[var(--muted)]">
                    {user.email}
                  </p>

                </div>

              </div>

            </div>
          )}

          {/* Navigation */}

          <div className="flex-1 space-y-2 p-5">

            <NavLinks
              user={user}
              mobile
              onClick={() => setOpen(false)}
            />

          </div>

          {/* Bottom */}

          <div className="space-y-4 border-t border-[var(--border)] p-5">

            <div className="flex items-center justify-between">

              <span className="font-medium">
                Theme
              </span>

              <ThemeToggle />

            </div>

            {!user ? (
              <div className="space-y-3">

                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  border
                  border-[var(--primary)]

                  py-3

                  font-semibold

                  text-[var(--primary)]
                "
                >
                  <LogIn size={18} />
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  bg-[var(--primary)]

                  py-3

                  font-semibold

                  text-white
                "
                >
                  <UserPlus size={18} />
                  Register
                </Link>

              </div>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="
                w-full

                rounded-xl

                bg-red-500

                py-3

                font-semibold

                text-white

                transition

                hover:bg-red-600
              "
              >
                Logout
              </button>
            )}

          </div>

        </div>

      </div>
    </>
  );
};

export default MobileMenu;