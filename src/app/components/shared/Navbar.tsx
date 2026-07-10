"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-[var(--secondary)]"
        >
          Drive<span className="text-[var(--primary)]">Mart</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-[var(--primary)] transition">
            Home
          </Link>

          <Link href="/cars" className="hover:text-[var(--primary)] transition">
            Cars
          </Link>

          <Link href="/about" className="hover:text-[var(--primary)] transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-[var(--primary)] transition">
            Contact
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            href="/login"
            className="px-5 py-2 rounded-lg border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-5 py-2 rounded-lg bg-[var(--primary)] text-white hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;