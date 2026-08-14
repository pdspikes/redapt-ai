interface ImagePlaceholderProps {
  label: string;
  className?: string;
  rounded?: string;
}

export default function ImagePlaceholder({
  label,
  className = "",
  rounded = "rounded-2xl",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border border-dashed border-line-strong bg-[rgba(127,127,127,0.06)] text-center ${rounded} ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ink-faint"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="px-4 text-sm font-medium text-ink-faint">{label}</span>
    </div>
  );
}
