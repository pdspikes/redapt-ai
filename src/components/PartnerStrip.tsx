const CLOUD_PARTNERS = [
  { name: "Anthropic", logo: "/logos/anthropic.svg", className: "h-4 w-auto md:h-[19px] opacity-60" },
  { name: "OpenAI", logo: "/logos/openai.svg", className: "h-7 w-auto md:h-8 opacity-40" },
  { name: "Microsoft Azure", logo: "/logos/azure.svg", className: "h-6 w-auto md:h-7 opacity-60" },
  { name: "AWS", logo: "/logos/aws.svg", className: "h-8 w-auto md:h-9 opacity-60" },
  { name: "Google Cloud", logo: "/logos/googlecloud.svg", className: "h-5 w-auto md:h-6 opacity-60" },
];

const INFRA_PARTNERS = [
  { name: "NVIDIA", logo: "/logos/nvidia.svg", className: "h-[16px] w-auto md:h-[19px] opacity-40" },
  { name: "Dell Technologies", logo: "/logos/dell.svg", className: "h-5 w-auto md:h-6 opacity-60" },
  { name: "AMD", logo: "/logos/amd.svg", className: "h-16 w-auto md:h-20 opacity-40" },
  { name: "Intel", logo: "/logos/intel.svg", className: "h-6 w-auto md:h-7 opacity-60" },
];

interface PartnerStripProps {
  label: string;
}

export default function PartnerStrip({ label }: PartnerStripProps) {
  return (
    <div className="text-center">
      <p className="mb-9 text-xs font-bold uppercase tracking-[0.1em] text-ink-faint">{label}</p>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-9 md:gap-x-20">
          {CLOUD_PARTNERS.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className={`grayscale transition hover:opacity-100 hover:grayscale-0 ${partner.className}`}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-9 md:gap-x-20">
          {INFRA_PARTNERS.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className={`grayscale transition hover:opacity-100 hover:grayscale-0 ${partner.className}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
