"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CarFront,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  UserCircle2,
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
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <div
      className="relative"
      ref={ref}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--card)] px-2 py-2 shadow-sm hover:shadow-md"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-white">
          {name.charAt(0)}
        </div>

        <span className="hidden font-medium lg:block">
          {name}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="absolute right-0 mt-4 w-72 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <UserCircle2
                size={46}
                className="text-[var(--primary)]"
              />

              <div>
                <h3 className="font-bold">
                  {name}
                </h3>

                <p className="text-sm text-[var(--muted)]">
                  {email}
                </p>
              </div>
            </div>

            <div className="my-4 h-px bg-[var(--border)]" />

            <div className="space-y-2">

              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>

              <Link
                href="/my-cars"
                className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <ClipboardList size={18} />
                My Cars
              </Link>

              <Link
                href="/dashboard/add-car"
                className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <PlusCircle size={18} />
                Add Car
              </Link>

            </div>

            <div className="my-4 h-px bg-[var(--border)]" />

            <button
              onClick={onLogout}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
            >
              <LogOut size={18} />
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;