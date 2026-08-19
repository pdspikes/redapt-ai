import type { ReactNode } from "react";

interface IconSwatchProps {
  size?: number;
  className?: string;
  bgClass?: string;
  icon?: ReactNode;
}

export default function IconSwatch({
  size = 42,
  className = "",
  bgClass = "bg-tint-bg",
  icon,
}: IconSwatchProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-[10px] ${bgClass} ${className}`}
      style={{ width: size, height: size }}
    >
      {icon ?? <div className="h-4 w-4 rounded-[4px] bg-heading" />}
    </div>
  );
}
