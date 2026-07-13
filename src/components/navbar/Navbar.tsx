"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const router = useRouter();

  const {
    user,
    logout,
    loading,
  } = useAuth();

  const handleLogout = async () => {
    await logout();

    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-[var(--secondary)]"
        >
          Drive<span className="text-[var(--primary)]">Mart</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 font-medium md:flex">
          <Link
            href="/"
            className="transition hover:text-[var(--primary)]"
          >
            Home
          </Link>

          <Link
            href="/explore-cars"
            className="transition hover:text-[var(--primary)]"
          >
            Explore Cars
          </Link>

          {user && (
            <>
              <Link
                href="/add-car"
                className="transition hover:text-[var(--primary)]"
              >
                Add Car
              </Link>

              <Link
                href="/my-cars"
                className="transition hover:text-[var(--primary)]"
              >
                My Cars
              </Link>
            </>
          )}

          <Link
            href="/about"
            className="transition hover:text-[var(--primary)]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-[var(--primary)]"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle/>
          {loading ? (
            <p className="text-sm text-gray-500">
              Loading...
            </p>
          ) : user ? (
            <>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <span className="font-medium">
                {user.name}
              </span>

              <button
                onClick={handleLogout}
                className="rounded-lg border border-red-500 px-5 py-2 text-red-500 transition hover:bg-red-500 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg border border-[var(--primary)] px-5 py-2 text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-[var(--primary)] px-5 py-2 text-white transition hover:opacity-90"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile */}
        <button className="text-3xl md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;