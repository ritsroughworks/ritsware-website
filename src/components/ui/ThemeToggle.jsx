import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem("theme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try { localStorage.setItem("theme", mode); } catch {}
  }, [mode]);

  return (
    <button
      aria-label="Toggle theme"
      className="p-2 rounded-md border border-black dark:border-white/60"
      onClick={() => setMode(prev => prev === "dark" ? "light" : "dark")}
    >
       {mode === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  );
}
