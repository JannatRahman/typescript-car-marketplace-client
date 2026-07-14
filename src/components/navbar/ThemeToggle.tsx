"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(dark ? "light" : "dark")
      }
      className="relative flex h-10 w-24 items-center rounded-full bg-slate-200 px-2 transition dark:bg-slate-800"
    >
      {/* Slider */}

      <div
        className={`absolute h-8 w-8 rounded-full bg-white shadow transition-all duration-300
        ${
          dark
            ? "translate-x-12"
            : "translate-x-0"
        }`}
      />

      <div className="flex w-full justify-between text-lg z-10">

        ☀️

        🌙

      </div>

    </button>
  );
}