import Reveal from "../components/Reveal";
import PillLink from "../components/PillLink";
import IconSwatch from "../components/IconSwatch";
import PartnerStrip from "../components/PartnerStrip";
import StatsBand from "../components/StatsBand";
import CtaBand from "../components/CtaBand";
import {
  SparkleIcon,
  SlidersIcon,
  ShieldCheckIcon,
  WorkflowIcon,
  UserCogIcon,
  ActivityIcon,
} from "../components/CapabilityIcons";
import { Link } from "react-router-dom";

const CAPABILITIES = [
  {
    title: "Enterprise AI Harness",
    body: "Move from PoC to production AI — with the data foundation, MLOps discipline, and governance that hold up under audit.",
    icon: <SparkleIcon className="h-7 w-7 text-heading" />,
  },
  {
    title: "Model Flexibility and Token Optimization",
    body: "Your AI harness is model-agnostic by design. As the LLM landscape evolves, you can swap, blend, or upgrade models without rebuilding. This keeps cost under control and ensures you're never stranded on an aging stack.",
    icon: <SlidersIcon className="h-7 w-7 text-heading" />,
  },
  {
    title: "Data Security and Client Information Protection",
    body: "Sensitive client data stays isolated and governed by design, not as an afterthought. We architect data boundaries, access controls, and audit trails so your organization can put real information into the harness with confidence.",
    icon: <ShieldCheckIcon className="h-7 w-7 text-heading" />,
  },
  {
    title: "Agentic Workflow Automation",
    body: "AI agents that take action across enterprise systems, not just answer questions. We design, build, and deploy agentic workflows that automate complex processes, surface decisions at the right moment, and operate reliably at scale.",
    icon: <WorkflowIcon className="h-7 w-7 text-heading" />,
  },
  {
    title: "Forward-Deployed Engineers",
    body: "We don't hand off and walk away. Redapt engineers embed in your operations on an ongoing basis: running workshops, building team capability, and ensuring your organization is extracting real value from the investment. ROI is measured, not assumed.",
    icon: <UserCogIcon className="h-7 w-7 text-heading" />,
  },
  {
    title: "Managed AI Operations",
    body: "Agentic systems require ongoing attention. We continuously monitor cost, security, and performance so issues get caught early and the system stays healthy over time. This is a commitment, not a handoff.",
    icon: <ActivityIcon className="h-7 w-7 text-heading" />,
  },
];

const PROCESS = [
  {
    step: "01 — Discover",
    body: "You bring a business challenge. We walk your environment, constraints, and stakeholders. You leave with a defensible path forward — not a strategy deck.",
  },
  {
    step: "02 — Deliver",
    body: "Your decisions become a production system. Security woven in from day one, multi-platform by design. The outcome you partnered for — not slides about what could happen.",
  },
  {
    step: "03 — Operate Independently",
    body: "Your team owns the platform, with the operating model to run it. We're on call when you need us — and ready for the next high-impact project.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-20 text-center md:px-16 md:pb-24 md:pt-28">
        <div
          className="pointer-events-none absolute left-1/2 top-[-60px] h-[400px] w-[90%] max-w-[900px] -translate-x-1/2 md:h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(88,186,113,0.16), transparent 65%)",
          }}
        />
        <div className="relative">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-tint-border bg-tint-bg px-4 py-2 text-[13px] font-bold tracking-[0.02em] text-heading">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Introducing Redapt AI
          </div>
          <h1 className="mx-auto mb-6 max-w-[900px] text-[38px] font-extrabold leading-[1.1] tracking-[-0.03em] text-heading sm:text-[48px] md:text-[58px] lg:text-[66px] lg:leading-[1.06]">
            Building AI that works securely, continuously, and on solid ground.
          </h1>
          <p className="mx-auto mb-10 max-w-[620px] text-lg leading-relaxed text-ink-muted">
            You're making AI, cloud, and security decisions that need to work for the next
            decade, not the next demo. We build alongside your team — then stay in your corner
            long after.
          </p>
          <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <PillLink to="/contact">Start a Discovery Conversation</PillLink>
            <PillLink to="/capabilities" variant="outline">
              See Capabilities
            </PillLink>
          </div>
        </div>
        <Reveal className="relative mx-auto mt-14 w-[70vw] overflow-hidden rounded-[20px] border border-line">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-agentic-workflow-poster.jpg"
            width={1440}
            height={696}
            className="block h-auto w-full"
            aria-label="Agentic AI workflow demonstration"
          >
            <source src="/hero-agentic-workflow.mp4" type="video/mp4" />
          </video>
        </Reveal>
      </section>

      {/* Partner strip */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-6 md:px-16">
        <PartnerStrip label="Best-in-class solutions with world-class partners" />
      </section>

      {/* Capability grid */}
      <section className="bg-bg-tint px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-14 max-w-[680px]">
            <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.08em] text-heading">
              Your Starting Point
            </p>
            <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-heading md:text-[40px]">
              Start with the capability that matches your next decision.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <Reveal key={cap.title}>
                <Link
                  to="/capabilities"
                  className="group block h-full rounded-2xl border border-line bg-white p-7 no-underline transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-accent-light"
                >
                  <IconSwatch className="mb-5" bgClass="bg-[#A9DD78]" icon={cap.icon} />
                  <h3 className="mb-2.5 text-lg font-bold text-heading">{cap.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-muted">{cap.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBand />

      {/* Process */}
      <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-16 md:py-28">
        <Reveal className="mb-14 max-w-[680px]">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.08em] text-heading">
            How We Work
          </p>
          <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-heading md:text-[40px]">
            Three phases. One accountable partner.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PROCESS.map((phase) => (
            <Reveal key={phase.step} className="border-t-2 border-heading pt-6">
              <div className="mb-3.5 text-sm font-bold text-heading">{phase.step}</div>
              <p className="text-base leading-[1.65] text-ink-muted md:text-[17px]">{phase.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        heading="AI-ready infrastructure, built on every layer of the stack."
        body="Already know what you need? Request an Architecture Review, Security Resilience Audit, or Data Readiness Workshop."
        tinted
      />
    </>
  );
}
