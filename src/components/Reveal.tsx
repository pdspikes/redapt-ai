import { useEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * Fades + slides children up as they enter the viewport (one-shot).
 * Mirrors the design prototype's IntersectionObserver behavior.
 */
export default function Reveal({ as: Tag = "div", className = "", children }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-reveal className={className}>
      {children}
    </Tag>
  );
}
