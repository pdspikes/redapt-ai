const PARTNERS = [
  { name: "Anthropic", logo: "/logos/anthropic.svg", className: "h-8 w-auto md:h-10 opacity-40" },
  { name: "Microsoft Azure", logo: "/logos/azure.svg", className: "h-6 w-auto md:h-7 opacity-60" },
  { name: "NVIDIA", logo: "/logos/nvidia.svg", className: "h-[16px] w-auto md:h-[19px] opacity-40" },
  { name: "Dell Technologies", logo: "/logos/dell.svg", className: "h-5 w-auto md:h-6 opacity-60" },
  { name: "AWS", logo: "/logos/aws.svg", className: "h-8 w-auto md:h-9 opacity-60" },
  { name: "CrowdStrike", logo: "/logos/crowdstrike.svg", className: "h-5 w-auto md:h-6 opacity-60" },
  { name: "Intel", logo: "/logos/intel.svg", className: "h-6 w-auto md:h-7 opacity-60" },
];

interface PartnerStripProps {
  label: string;
}

export default function PartnerStrip({ label }: PartnerStripProps) {
  return (
    <div className="text-center">
      <p className="mb-7 text-xs font-bold uppercase tracking-[0.1em] text-ink-faint">{label}</p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-12">
        {PARTNERS.map((partner) => (
          <img
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            className={`grayscale transition hover:opacity-100 hover:grayscale-0 ${partner.className}`}
          />
        ))}
      </div>
    </div>
  );
}
