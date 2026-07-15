"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CarFront,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  Settings,
  UserRound,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Props {
  name: string;
  email: string;
  onLogout: () => void;
}

const ProfileDropdown = ({
  name,
  email,
  onLogout,
}: Props) => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      clickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        clickOutside
      );
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
    >
      {/* Avatar Button */}

      <button
        onClick={() => setOpen(!open)}
        className="
        flex
        items-center
        gap-3

        rounded-full

        border
        border-[var(--border)]

        bg-[var(--card)]

        px-2
        py-2

        transition-all
        duration-300

        hover:shadow-lg
        hover:border-[var(--primary)]
        "
      >
        <div
          className="
          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-full

          bg-gradient-to-br
          from-[var(--primary)]
          to-blue-500

          text-lg
          font-bold
          text-white
          "
        >
          {name.charAt(0).toUpperCase()}
        </div>

        <div className="hidden text-left lg:block">
          <p className="font-semibold leading-none">
            {name}
          </p>

          <p className="text-xs text-[var(--muted)]">
            View Profile
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 15,
              scale: 0.97,
            }}
            transition={{
              duration: 0.18,
            }}
            className="
            absolute
            right-0
            mt-4
            w-80

            overflow-hidden

            rounded-3xl

            border
            border-[var(--border)]

            bg-[var(--card)]

            shadow-2xl
            "
          >
            {/* Header */}

            <div className="bg-gradient-to-r from-[var(--primary)] to-blue-500 p-6 text-white">

              <div className="flex items-center gap-4">

                <div
                  className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center

                  rounded-full

                  bg-white/20

                  text-2xl
                  font-bold
                  backdrop-blur
                  "
                >
                  {name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h2 className="text-lg font-bold">
                    {name}
                  </h2>

                  <p className="text-sm text-white/80">
                    {email}
                  </p>
                </div>

              </div>

            </div>

            {/* Menu */}

            <div className="space-y-2 p-4">

              <Link
                href="/dashboard"
                className="flex items-center gap-4 rounded-2xl px-4 py-3 transition hover:bg-[var(--surface-secondary)]"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </Link>

              <Link
                href="/manage-cars"
                className="flex items-center gap-4 rounded-2xl px-4 py-3 transition hover:bg-[var(--surface-secondary)]"
              >
                <CarFront size={20} />
                Manage Cars
              </Link>

              <Link
                href="/dashboard/add-car"
                className="flex items-center gap-4 rounded-2xl px-4 py-3 transition hover:bg-[var(--surface-secondary)]"
              >
                <PlusCircle size={20} />
                Add Car
              </Link>

              <Link
                href="#"
                className="flex items-center gap-4 rounded-2xl px-4 py-3 transition hover:bg-[var(--surface-secondary)]"
              >
                <Settings size={20} />
                Settings
              </Link>

              <Link
                href="#"
                className="flex items-center gap-4 rounded-2xl px-4 py-3 transition hover:bg-[var(--surface-secondary)]"
              >
                <UserRound size={20} />
                My Profile
              </Link>

            </div>

            <div className="border-t border-[var(--border)] p-4">

              <button
                onClick={onLogout}
                className="
                flex
                w-full
                items-center
                justify-center
                gap-3

                rounded-2xl

                bg-red-500

                px-4
                py-3

                font-semibold
                text-white

                transition

                hover:bg-red-600
                "
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;