"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const pathname = usePathname();

  const {
    user,
    logout,
    loading,
  } = useAuth();

  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-[var(--border)]
      bg-[var(--background)]/80
      backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

 

        <Link
          href="/"
          className="text-3xl font-extrabold"
        >
          <span className="text-[var(--secondary)]">
            Drive
          </span>

          <span className="text-[var(--primary)]">
            Mart
          </span>
        </Link>

    

        <nav className="hidden items-center gap-8 md:flex">

          <NavLinks user={user} />

        </nav>

        {/* Right */}

        <div className="hidden items-center gap-4 md:flex">

          <ThemeToggle />

          {loading ? (
            <div className="h-10 w-28 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
          ) : user ? (
            <ProfileDropdown
              name={user.name}
              email={user.email}
              onLogout={logout}
            />
          ) : (
            <div className="flex gap-3">

              <Link
                href="/login"
                className="rounded-xl border border-[var(--primary)] px-5 py-2 text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-[var(--primary)] px-5 py-2 text-white transition hover:opacity-90"
              >
                Register
              </Link>

            </div>
          )}

        </div>

        {/* Mobile */}

        <div className="md:hidden">

          <MobileMenu
            user={user}
            logout={logout}
          />

        </div>

      </div>
    </header>
  );
};

export default Navbar;