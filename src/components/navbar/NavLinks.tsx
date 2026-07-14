"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      href: "/",
      icon: House,
      show: true,
    },
    {
      name: "Explore Cars",
      href: "/explore-cars",
      icon: CarFront,
      show: true,
    },
    {
      name: "Add Car",
      href: "/dashboard/add-car",
      icon: CirclePlus,
      show: !!user,
    },
    {
      name: "My Cars",
      href: "/my-cars",
      icon: ClipboardList,
      show: !!user,
    },
    {
      name: "About",
      href: "/about",
      icon: Info,
      show: true,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Mail,
      show: true,
    },
  ];

  return (
    <>
      {links
        .filter((link) => link.show)
        .map((link) => {
          const Icon = link.icon;

          const active =
            pathname === link.href ||
            (link.href !== "/" &&
              pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClick}
              className={
                mobile
                  ? `
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
                        ? "bg-[var(--primary)] text-white"
                        : "text-[var(--foreground)] hover:bg-[var(--surface-secondary)]"
                    }
                  `
                  : `
                    flex
                    items-center
                    gap-2

                    rounded-xl

                    px-4
                    py-2

                    text-sm
                    font-semibold

                    transition-all
                    duration-200

                    ${
                      active
                        ? "bg-[var(--primary)] text-white shadow-md"
                        : "text-[var(--foreground)] hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)]"
                    }
                  `
              }
            >
              <Icon size={18} />

              <span>{link.name}</span>
            </Link>
          );
        })}
    </>
  );
};

export default NavLinks;