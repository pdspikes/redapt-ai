import type { ReactNode } from "react";

interface IconSwatchProps {
  size?: number;
  className?: string;
  icon?: ReactNode;
}

export default function IconSwatch({ size = 42, className = "", icon }: IconSwatchProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-[10px] bg-tint-bg ${className}`}
      style={{ width: size, height: size }}
    >
      {icon ?? <div className="h-4 w-4 rounded-[4px] bg-heading" />}
    </div>
  );
}
