"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { useState } from "react";

interface Props {
  user: {
    name: string;
    email: string;
  } | null;
  logout: () => void;
}

const MobileMenu = ({
  user,
  logout,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}

      <button
        onClick={() => setOpen(true)}
        className="md:hidden"
      >
        <Menu size={30} />
      </button>

      <AnimatePresence>

        {open && (

          <>
            {/* Background */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40"
            />

            {/* Drawer */}

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 35,
              }}
              className="fixed right-0 top-0 z-50 h-screen w-80 bg-[var(--card)] shadow-2xl"
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b border-[var(--border)] p-6">

                <h2 className="text-2xl font-bold">
                  DriveMart
                </h2>

                <button
                  onClick={() => setOpen(false)}
                >
                  <X />
                </button>

              </div>

              {/* Navigation */}

              <div className="space-y-2 p-6">

                <NavLinks
                  user={user}
                  mobile
                  onClick={() => setOpen(false)}
                />

              </div>

              {/* Theme */}

              <div className="border-t border-[var(--border)] p-6">

                <ThemeToggle />

              </div>

              {/* Bottom */}

              <div className="absolute bottom-0 w-full border-t border-[var(--border)] p-6">

                {user ? (
                  <>
                    <p className="font-bold">
                      {user.name}
                    </p>

                    <p className="mb-4 text-sm text-[var(--muted)]">
                      {user.email}
                    </p>

                    <button
                      onClick={logout}
                      className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="space-y-3">

                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl border py-3 text-center"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl bg-[var(--primary)] py-3 text-center text-white"
                    >
                      Register
                    </Link>

                  </div>
                )}

              </div>

            </motion.div>

          </>
        )}

      </AnimatePresence>
    </>
  );
};

export default MobileMenu;