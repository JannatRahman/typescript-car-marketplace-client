"use client";

import Link from "next/link";
import {
  CarFront,
  CirclePlus,
  House,
  Info,
  Mail,
  ClipboardList,
} from "lucide-react";

interface NavLinksProps {
  user: {
    name: string;
    email: string;
  } | null;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({
  user,
  mobile = false,
  onClick,
}: NavLinksProps) => {
  const className = mobile
    ? "flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
    : "flex items-center gap-2 transition hover:text-[var(--primary)]";

  return (
    <>
      <Link
        href="/"
        className={className}
        onClick={onClick}
      >
        <House size={18} />
        Home
      </Link>

      <Link
        href="/explore-cars"
        className={className}
        onClick={onClick}
      >
        <CarFront size={18} />
        Explore Cars
      </Link>

      {user && (
        <>
          <Link
            href="/add-car"
            className={className}
            onClick={onClick}
          >
            <CirclePlus size={18} />
            Add Car
          </Link>

          <Link
            href="/my-cars"
            className={className}
            onClick={onClick}
          >
            <ClipboardList size={18} />
            My Cars
          </Link>
        </>
      )}

      <Link
        href="/about"
        className={className}
        onClick={onClick}
      >
        <Info size={18} />
        About
      </Link>

      <Link
        href="/contact"
        className={className}
        onClick={onClick}
      >
        <Mail size={18} />
        Contact
      </Link>
    </>
  );
};

export default NavLinks;