interface IconProps {
  className?: string;
}

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Enterprise AI Harness */
export function SparkleIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5l1.8 5.7 5.7 1.8-5.7 1.8-1.8 5.7-1.8-5.7-5.7-1.8 5.7-1.8L12 2.5z" />
      <path d="M19 15l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z" opacity="0.6" />
    </svg>
  );
}

/** Model Flexibility and Token Optimization */
export function SlidersIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <line x1="6" y1="4" x2="6" y2="20" />
      <circle cx="6" cy="9" r="2" fill="currentColor" stroke="none" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <circle cx="12" cy="15" r="2" fill="currentColor" stroke="none" />
      <line x1="18" y1="4" x2="18" y2="20" />
      <circle cx="18" cy="7" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Data Security and Client Information Protection */
export function ShieldCheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 2.5l7.5 3.2v5.8c0 5-3.3 7.9-7.5 9.5-4.2-1.6-7.5-4.5-7.5-9.5V5.7L12 2.5z" />
      <path d="M8.75 12l2 2 4.5-4.5" />
    </svg>
  );
}

/** Agentic Workflow Automation */
export function WorkflowIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

/** Forward-Deployed Engineers */
export function UserCogIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="9.5" cy="7.5" r="3" />
      <path d="M3.5 20v-1a5 5 0 0 1 5-5h1.5" />
      <circle cx="18" cy="16.5" r="2.25" />
      <path d="M18 12.75v1.1M18 19.65v1.1M21.15 16.5h-1.1M15.95 16.5h-1.1M20.4 14.1l-.8.8M15.4 18.6l.8-.8M20.4 18.9l-.8-.8M15.4 14.4l.8.8" />
    </svg>
  );
}

/** Managed AI Operations */
export function ActivityIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 12h4l2.5 7 4-14 2.5 7H21" />
    </svg>
  );
}
