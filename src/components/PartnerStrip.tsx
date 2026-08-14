const PARTNERS = ["AWS", "Microsoft Azure", "NVIDIA", "Dell Technologies", "CrowdStrike", "Intel"];

interface PartnerStripProps {
  label: string;
}

export default function PartnerStrip({ label }: PartnerStripProps) {
  return (
    <div className="text-center">
      <p className="mb-7 text-xs font-bold uppercase tracking-[0.1em] text-ink-faint">{label}</p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-14">
        {PARTNERS.map((partner) => (
          <span key={partner} className="text-lg font-bold text-partner">
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
}
