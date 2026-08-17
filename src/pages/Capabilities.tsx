import Reveal from "../components/Reveal";
import IconSwatch from "../components/IconSwatch";
import ImagePlaceholder from "../components/ImagePlaceholder";
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

const ROWS = [
  {
    title: "Enterprise AI Harness",
    body: "Deploy a purpose-built AI harness: the central operating layer through which your organization interacts with AI. Architected for flexibility rather than lock-in, so the harness serves your business regardless of which models or tools are underneath it.",
    linkLabel: "Request a Data Readiness Workshop →",
    visual: "Drop AI capability visual",
    imageFirst: false,
    icon: <SparkleIcon className="h-5 w-5 text-heading" />,
  },
  {
    title: "Model Flexibility and Token Optimization",
    body: "Lakehouse builds, governance frameworks, and AI-ready data estates. Built where your data lives — not where the vendor wants you.",
    linkLabel: "Request a Data Readiness Workshop →",
    visual: "Drop data/analytics visual",
    imageFirst: true,
    icon: <SlidersIcon className="h-5 w-5 text-heading" />,
  },
  {
    title: "Data Security and Client Information Protection",
    body: "Your security must hold up under audit and under attack. From security leadership to 24x7 threat operations and tool consolidation — one team accountable for the program, not just the deployment.",
    linkLabel: "Explore Cybersecurity →",
    visual: "Drop cybersecurity visual",
    imageFirst: false,
    icon: <ShieldCheckIcon className="h-5 w-5 text-heading" />,
  },
  {
    title: "Agentic Workflow Automation",
    body: "Hyperscaler-grade migration, application modernization, and platform engineering across AWS, Azure, and Google Cloud. Designed for optionality, not lock-in.",
    linkLabel: "Request an Architecture Review →",
    visual: "Drop cloud adoption visual",
    imageFirst: true,
    icon: <WorkflowIcon className="h-5 w-5 text-heading" />,
  },
  {
    title: "Forward-Deployed Engineers",
    body: "We don't hand off and walk away. Redapt engineers embed in your operations on an ongoing basis: running workshops, building team capability, and ensuring your organization is extracting real value from the investment. ROI is measured, not assumed.",
    linkLabel: "Request an Architecture Review →",
    visual: "Drop datacenter visual",
    imageFirst: false,
    icon: <UserCogIcon className="h-5 w-5 text-heading" />,
  },
  {
    title: "Managed AI Operations",
    body: "Governance-first cloud operations with measurable cost discipline. Your team gets visibility into where spend is going — and the structure to keep it under control.",
    linkLabel: "Request a Discovery Call →",
    visual: "Drop FinOps visual",
    imageFirst: true,
    icon: <ActivityIcon className="h-5 w-5 text-heading" />,
  },
];

export default function Capabilities() {
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
            Capabilities
          </p>
          <h1 className="mb-5 text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-heading sm:text-[42px] md:text-[52px]">
            Six capabilities. One accountable partner.
          </h1>
          <p className="mx-auto max-w-[620px] text-lg leading-relaxed text-ink-muted">
            Every engagement starts with the capability that matches your next decision — and
            stays with the same team from architecture through operations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-16 pt-4 md:px-16">
        {ROWS.map((row, i) => (
          <Reveal
            key={row.title}
            className={`grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-2 md:gap-14 md:py-14 ${
              i < ROWS.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <div className={row.imageFirst ? "order-2 md:order-2" : "order-2 md:order-1"}>
              <IconSwatch size={44} className="mb-5" icon={row.icon} />
              <h2 className="mb-3.5 text-2xl font-bold tracking-[-0.01em] text-heading md:text-[28px]">
                {row.title}
              </h2>
              <p className="mb-5 text-base leading-[1.65] text-ink-muted">{row.body}</p>
              <Link to="/contact" className="text-[15px] font-bold text-heading no-underline hover:text-heading-hover">
                {row.linkLabel}
              </Link>
            </div>
            <div className={row.imageFirst ? "order-1 md:order-1" : "order-1 md:order-2"}>
              <ImagePlaceholder label={row.visual} className="h-[240px] w-full md:h-[320px]" />
            </div>
          </Reveal>
        ))}
      </section>

      <CtaBand
        heading="Not sure where to start?"
        body="Talk it through with us first. We'll help you pick the capability that matches your next decision."
        tinted
      />
    </>
  );
}
