import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface PillLinkProps {
  to: string;
  variant?: "dark" | "outline";
  className?: string;
  children: ReactNode;
}

export default function PillLink({ to, variant = "dark", className = "", children }: PillLinkProps) {
  const base = "inline-block rounded-full px-8 py-4 text-base font-semibold no-underline transition-colors";
  const styles =
    variant === "dark"
      ? "bg-brand text-white hover:bg-brand-hover"
      : "border border-heading/35 text-heading hover:border-heading hover:text-heading-hover";

  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
