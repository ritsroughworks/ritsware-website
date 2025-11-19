// src/components/layout/Header.jsx
import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full py-3 px-4 md:px-10 theme-transition border-b border-white/6"
            style={{ color: "var(--text)" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-3">
        <img
            src="/assets/logo.png"
            alt="RITSware Logo"
            className="w-10 h-10 object-contain"
        />

        <div>
            <span
            className="text-lg font-semibold theme-transition"
            style={{ color: "var(--text)" }}
            >
            RITSware
            </span>
            <div
            className="text-xs theme-transition"
            style={{ color: "var(--text-muted)" }}
            >
            Innovation & Simplicity
            </div>
        </div>
        </Link>


        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 theme-transition">
          <Link
            to="/about"
            className="theme-transition"
            style={{ color: "var(--text-muted)" }}
          >
            About
          </Link>
          <Link
            to="/services"
            className="theme-transition"
            style={{ color: "var(--text-muted)" }}
          >
            Services
          </Link>
          <Link
            to="/work"
            className="theme-transition"
            style={{ color: "var(--text-muted)" }}
          >
            Our Work
          </Link>
          {/* <Link
            to="/contact"
            className="theme-transition"
            style={{ color: "var(--text-muted)" }}
          >
            Contact
          </Link> */}

          {/* CTA Button stays bright */}
          <Link
            to="/contact"
            className="ml-4 px-4 py-2 rounded-md text-white bg-gradient-to-r from-rits-usaBlue to-rits-mutedRed"
          >
            Get in touch
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
