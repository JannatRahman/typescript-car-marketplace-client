"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const dark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="
        relative

        flex
        h-10
        w-16
        items-center

        rounded-full

        border
        border-[var(--border)]

        bg-[var(--surface-secondary)]

        p-1

        transition-all
        duration-300

        hover:shadow-md
      "
    >
      {/* Slider */}

      <div
        className={`
          absolute

          flex
          h-8
          w-8
          items-center
          justify-center

          rounded-full

          bg-[var(--surface)]

          shadow-md

          transition-all
          duration-300

          ${
            dark
              ? "translate-x-7"
              : "translate-x-0"
          }
        `}
      >
        {dark ? (
          <Moon
            size={16}
            className="text-blue-500"
          />
        ) : (
          <Sun
            size={16}
            className="text-amber-500"
          />
        )}
      </div>
    </button>
  );
}