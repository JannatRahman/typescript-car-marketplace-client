"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className="
      relative
      flex
      h-11
      w-24
      items-center
      rounded-full
      border
      border-slate-300
      bg-white
      px-2
      shadow-md
      transition
      dark:border-slate-700
      dark:bg-slate-900
      "
    >
      {/* Sliding Circle */}

      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 30,
        }}
        className={`
        absolute
        h-8
        w-8
        rounded-full
        bg-blue-600
        shadow-lg
        ${
          isDark
            ? "translate-x-12"
            : "translate-x-0"
        }
        `}
      />

      <div className="z-10 flex w-full items-center justify-between px-1">
        <motion.div
          animate={{
            rotate: isDark ? -180 : 0,
            scale: isDark ? 0.8 : 1,
            opacity: isDark ? 0.5 : 1,
          }}
        >
          <Sun
            size={18}
            className="text-amber-500"
          />
        </motion.div>

        <motion.div
          animate={{
            rotate: isDark ? 0 : 180,
            scale: isDark ? 1 : 0.8,
            opacity: isDark ? 1 : 0.5,
          }}
        >
          <Moon
            size={18}
            className="text-slate-100 dark:text-white"
          />
        </motion.div>
      </div>
    </button>
  );
};

export default ThemeToggle;