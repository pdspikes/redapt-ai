interface LogoProps {
  size?: "nav" | "footer";
}

export default function Logo({ size = "nav" }: LogoProps) {
  const textSize = size === "nav" ? "text-[19px]" : "text-lg";
  return (
    <span className="inline-flex items-center gap-[9px]">
      <span className="h-2.5 w-2.5 rounded-[3px] bg-brand" />
      <span className={`font-bold ${textSize} text-ink tracking-[-0.02em]`}>redapt.ai</span>
    </span>
  );
}
