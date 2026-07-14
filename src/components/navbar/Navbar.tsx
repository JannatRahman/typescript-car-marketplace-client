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

bg-[color:color-mix(in_srgb,var(--background)_85%,transparent)]

backdrop-blur-xl
"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">



        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div
            className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-2xl
      bg-[var(--primary)]
      text-xl
      font-bold
      text-white
      shadow-md
    "
          >
            D
          </div>

          <div className="leading-tight">
            <h1 className="text-2xl font-extrabold tracking-tight">
              Drive
              <span className="text-[var(--primary)]">
                Mart
              </span>
            </h1>

            <p className="text-xs text-[var(--foreground-muted)]">
              Premium Car Marketplace
            </p>
          </div>
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