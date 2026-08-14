import Reveal from "./Reveal";
import PillLink from "./PillLink";

interface CtaBandProps {
  heading: string;
  body: string;
  tinted?: boolean;
}

export default function CtaBand({ heading, body, tinted = false }: CtaBandProps) {
  return (
    <Reveal
      as="section"
      className={`px-6 py-20 text-center md:px-16 ${tinted ? "bg-bg-tint" : ""}`}
    >
      <h2 className="mx-auto mb-5 max-w-[720px] text-[28px] font-extrabold tracking-[-0.02em] text-heading md:text-[36px]">
        {heading}
      </h2>
      <p className="mx-auto mb-9 max-w-[560px] text-[17px] text-ink-muted">{body}</p>
      <PillLink to="/contact">Start a Discovery Conversation</PillLink>
    </Reveal>
  );
}
