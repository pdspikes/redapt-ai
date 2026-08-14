import Reveal from "../components/Reveal";
import ImagePlaceholder from "../components/ImagePlaceholder";
import StatsBand from "../components/StatsBand";
import PartnerStrip from "../components/PartnerStrip";
import CtaBand from "../components/CtaBand";

const PROOF_STATS = [
  { value: "220+", caption: "Technologists on call" },
  { value: "40+", caption: "Countries served via global logistics" },
  { value: "Decades", caption: "Of combined enterprise experience" },
  { value: "Years", caption: "Average client relationship length" },
];

const STORIES = [
  {
    quote:
      "Redapt didn't hand us a strategy deck — they stayed until our GPU cluster was actually in production.",
    name: "VP Infrastructure",
    org: "Global Financial Services",
  },
  {
    quote:
      "Our security program finally has one team accountable end to end, not five vendors pointing fingers.",
    name: "CISO",
    org: "Healthcare Enterprise",
  },
  {
    quote:
      "We went from AI pilot to production model in a quarter — with governance our auditors actually accepted.",
    name: "Chief Data Officer",
    org: "Retail & Logistics",
  },
];

export default function Proof() {
  return (
    <>
      <section className="relative mx-auto max-w-[900px] px-6 pb-16 pt-20 text-center md:px-16">
        <div
          className="pointer-events-none absolute left-1/2 top-[-40px] h-[320px] w-[90%] max-w-[800px] -translate-x-1/2 md:h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(88,186,113,0.14), transparent 65%)",
          }}
        />
        <div className="relative">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.08em] text-heading">
            Proof
          </p>
          <h1 className="mb-5 text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-heading sm:text-[42px] md:text-[52px]">
            Get to know us. Decide for yourself.
          </h1>
          <p className="mx-auto max-w-[620px] text-lg leading-relaxed text-ink-muted">
            Most Redapt customers remain with us for years, some for decades. Here's why they
            stay.
          </p>
        </div>
      </section>

      <StatsBand stats={PROOF_STATS} />

      <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-16 md:py-24">
        <Reveal className="mb-14 max-w-[680px]">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.08em] text-heading">
            Customer Stories
          </p>
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-heading md:text-[40px]">
            Discover how we elevate organizations.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((story) => (
            <Reveal
              key={story.name + story.org}
              className="flex flex-col gap-5 rounded-2xl bg-bg-tint p-8"
            >
              <ImagePlaceholder label="Drop customer photo/logo" className="h-[160px] w-full" rounded="rounded-xl" />
              <p className="italic leading-relaxed text-quote">"{story.quote}"</p>
              <div>
                <div className="text-sm font-bold text-ink">{story.name}</div>
                <div className="text-[13px] text-ink-faint">{story.org}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-bg-tint px-6 py-20 md:px-16">
        <Reveal className="mx-auto max-w-[1100px] text-center">
          <PartnerStrip label="Trusted alongside world-class partners" />
        </Reveal>
      </section>

      <CtaBand
        heading="Decide if Redapt is the right partner for you."
        body="Request an Architecture Review, Security Resilience Audit, Cloud Cost Governance Assessment, or Data Readiness Workshop."
      />
    </>
  );
}
