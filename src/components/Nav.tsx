import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/proof", label: "Proof" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-5 md:px-16">
        <Link to="/" className="no-underline" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[15px] font-semibold no-underline transition-colors ${
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-full bg-brand px-[22px] py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-brand-hover lg:inline-block"
        >
          Talk to an Expert →
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-1 lg:hidden"
        >
          <span className={`h-[2px] w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-line px-6 pb-6 pt-2 lg:hidden">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-[15px] font-semibold no-underline ${
                  isActive ? "bg-tint-bg text-ink" : "text-ink-muted"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand px-[22px] py-3 text-center text-sm font-semibold text-white no-underline transition-colors hover:bg-brand-hover"
          >
            Talk to an Expert →
          </Link>
        </div>
      )}
    </nav>
  );
}
