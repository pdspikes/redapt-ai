import Reveal from "../components/Reveal";
import StatsBand from "../components/StatsBand";
import PartnerStrip from "../components/PartnerStrip";
import CtaBand from "../components/CtaBand";

const PROOF_STATS = [
  { value: "220+", caption: "Technologists on call" },
  { value: "40+", caption: "Countries served via global logistics" },
  { value: "200+", caption: "Partner engineering certifications" },
  { value: "30+", caption: "Years of delivering business-critical technology" },
];

const OUTCOMES = [
  "A secure AI harness your team can trust with real client and business data",
  "Model flexibility that protects your investment as the AI landscape evolves",
  "Measurable ROI tracked by engineers embedded in your operations",
  "Teams that are trained, enabled, and actually using the AI you've built",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.2 2.2 4.8-5.4" />
    </svg>
  );
}

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
            AI-ready infrastructure, built on every layer of the stack.
          </h1>
          <p className="mx-auto max-w-[620px] text-lg leading-relaxed text-ink-muted">
            The applied AI layer becomes significantly more effective once the foundational
            environment is properly structured. Redapt brings infrastructure, cloud, and data
            expertise that most AI engagements require, but rarely arrive with.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-4 md:px-16">
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.08em] text-heading">
              Customer Outcomes
            </p>
            <ul className="flex flex-col gap-4">
              {OUTCOMES.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-base font-bold leading-relaxed text-ink-muted">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#003E47] p-8 md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-[#A9DD78]">Why Redapt</h2>
            <p className="text-base leading-relaxed text-white">
              Redapt engineers don't hand off and disappear. We listen first, design for
              optionality so your AI harness isn't locked to any single model or vendor, and
              stay accountable through the operations we help you run. We measure what we
              build. We're there when it matters.
            </p>
          </div>
        </Reveal>
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
              <p className="text-[17.6px] italic leading-relaxed text-bg-dark">"{story.quote}"</p>
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
