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
      name: "Explore",
      href: "/explore-cars",
      icon: CarFront,
      show: true,
    },
    {
      name: "Sell Car",
      href: "/dashboard/add-car",
      icon: CirclePlus,
      show: !!user,
    },
    {
      name: "My Cars",
      href: "/manage-cars",
      icon: ClipboardList,
      show: !!user,
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
                    px-5
                    py-3
                    text-base
                    font-medium
                    transition-all
                    duration-300

                    ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                        : "text-[var(--foreground)] hover:bg-slate-100 dark:hover:bg-slate-800"
                    }
                  `
                  : `
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-5
                    py-2.5
                    text-[15px]
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                        : "text-[var(--foreground)] hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600"
                    }
                  `
              }
            >
              <Icon
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span>{link.name}</span>
            </Link>
          );
        })}
    </>
  );
};

export default NavLinks;