import Reveal from "../components/Reveal";
import IconSwatch from "../components/IconSwatch";
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
    icon: <SparkleIcon className="h-[90px] w-[90px] text-heading" />,
  },
  {
    title: "Model Flexibility and Token Optimization",
    body: "Lakehouse builds, governance frameworks, and AI-ready data estates. Built where your data lives, not where the vendor wants you.",
    linkLabel: "Request a Data Readiness Workshop →",
    icon: <SlidersIcon className="h-[90px] w-[90px] text-heading" />,
  },
  {
    title: "Data Security and Client Information Protection",
    body: "Your security must hold up under audit and under attack. From security leadership to 24x7 threat operations and tool consolidation, one team is accountable for the program, not just the deployment.",
    linkLabel: "Explore Cybersecurity →",
    icon: <ShieldCheckIcon className="h-[90px] w-[90px] text-heading" />,
  },
  {
    title: "Agentic Workflow Automation",
    body: "Hyperscaler-grade migration, application modernization, and platform engineering across AWS, Azure, and Google Cloud. Designed for optionality, not lock-in.",
    linkLabel: "Request an Architecture Review →",
    icon: <WorkflowIcon className="h-[90px] w-[90px] text-heading" />,
  },
  {
    title: "Forward-Deployed Engineers",
    body: "We don't hand off and walk away. Redapt engineers embed in your operations on an ongoing basis: running workshops, building team capability, and ensuring your organization is extracting real value from the investment. ROI is measured, not assumed.",
    linkLabel: "Request an Architecture Review →",
    icon: <UserCogIcon className="h-[90px] w-[90px] text-heading" />,
  },
  {
    title: "Managed AI Operations",
    body: "Governance-first cloud operations with measurable cost discipline. Your team gets visibility into where spend is going, and the structure to keep it under control.",
    linkLabel: "Request a Discovery Call →",
    icon: <ActivityIcon className="h-[90px] w-[90px] text-heading" />,
  },
];

export default function Capabilities() {
  return (
    <>
      <section className="relative mx-auto max-w-[1100px] px-6 pb-16 pt-20 text-center md:px-16">
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
            Everything production AI requires, from one accountable partner.
          </h1>
          <p className="mx-auto max-w-[620px] text-lg leading-relaxed text-ink-muted">
            Start with the capability that matches your next decision. The same team stays with
            you from architecture through operations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-16 pt-4 md:px-16">
        {ROWS.map((row, i) => (
          <Reveal
            key={row.title}
            className={`flex flex-col items-start justify-between gap-8 py-12 sm:flex-row sm:items-center md:py-14 ${
              i < ROWS.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <div className="max-w-[640px] text-left">
              <h2 className="mb-3.5 text-2xl font-bold tracking-[-0.01em] text-heading md:text-[28px]">
                {row.title}
              </h2>
              <p className="mb-5 text-base leading-[1.65] text-ink-muted">{row.body}</p>
              <Link to="/contact" className="text-[15px] font-bold text-heading no-underline hover:text-heading-hover">
                {row.linkLabel}
              </Link>
            </div>
            <IconSwatch
              size={125}
              bgClass="bg-[#D7F2C5]"
              className="flex-shrink-0 translate-x-[-50px]"
              icon={row.icon}
            />
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
