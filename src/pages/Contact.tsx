import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import IconSwatch from "../components/IconSwatch";
import Reveal from "../components/Reveal";

const CONTACT_INFO = [
  { label: "Email", value: "results@redapt.ai" },
  { label: "Phone", value: "425-882-0400" },
  { label: "Office", value: "14051 NE 200th Street, Woodinville, WA 98072" },
];

const OFFERS = [
  { title: "Architecture Review", body: "Cloud & infrastructure decisions, stress-tested." },
  { title: "Security Resilience Audit", body: "Find the gaps before an attacker or auditor does." },
  { title: "Cloud Cost Governance", body: "Visibility and structure for runaway cloud spend." },
  { title: "Data Readiness Workshop", body: "Is your data estate actually ready for AI?" },
];

const inputClasses =
  "w-full rounded-lg border border-line-strong bg-white px-3.5 py-3 font-sans text-sm text-ink outline-none transition-colors focus:border-brand";

const NOTIFY_EMAILS = "b.ashkenazy@redapt.com,pspikes@redapt.com";
const FALLBACK_CONTACT_NOTE =
  "Something went wrong sending your request. Please try again, or email results@redapt.ai directly.";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!formId) {
      setError(
        "This form isn't connected to an email service yet. Please reach us directly at results@redapt.ai in the meantime.",
      );
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(FALLBACK_CONTACT_NOTE);
      }
    } catch {
      setError(FALLBACK_CONTACT_NOTE);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-6 pb-20 pt-20 md:px-16 md:pb-28 md:pt-24 lg:grid-cols-2 lg:gap-16">
        <div
          className="pointer-events-none absolute left-[5%] top-[-40px] h-[320px] w-[90%] max-w-[700px] md:h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(88,186,113,0.14), transparent 65%)",
          }}
        />
        <div className="relative">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.08em] text-heading">
            Contact
          </p>
          <h1 className="mb-5 text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-heading sm:text-[40px] md:text-[48px]">
            Start a discovery conversation.
          </h1>
          <p className="mb-10 max-w-[460px] text-[17px] leading-relaxed text-ink-muted">
            Tell us about the initiative you're working through. We'll come back with a point
            of view, not a pitch.
          </p>

          <div className="flex flex-col gap-6">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <IconSwatch size={36} className="rounded-lg" />
                <div>
                  <div className="mb-0.5 text-[15px] font-bold text-ink">{item.label}</div>
                  <div className="text-[15px] text-ink-muted">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-[20px] border border-line-soft bg-bg-tint p-8 md:p-10">
          {submitted ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <div className="mb-4 h-10 w-10 rounded-full bg-tint-bg" />
              <h2 className="mb-2 text-xl font-bold text-heading">Thanks — we got it.</h2>
              <p className="text-[15px] text-ink-muted">
                Someone from our team will follow up shortly to schedule your discovery call.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-4.5" onSubmit={handleSubmit}>
              <input type="hidden" name="_cc" value={NOTIFY_EMAILS} />
              <input type="hidden" name="_subject" value="New discovery call request — redapt.ai" />
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-ink">
                    First name
                  </label>
                  <input type="text" name="firstName" placeholder="Jordan" required className={inputClasses} />
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-ink">
                    Last name
                  </label>
                  <input type="text" name="lastName" placeholder="Rivera" required className={inputClasses} />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-ink">
                  Work email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jordan@company.com"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-ink">
                  Company
                </label>
                <input type="text" name="company" placeholder="Acme Corp" required className={inputClasses} />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-ink">
                  Title
                </label>
                <input type="text" name="title" placeholder="VP Infrastructure" className={inputClasses} />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-ink">
                  What are you working through?
                </label>
                <textarea
                  name="message"
                  placeholder="A brief note on the initiative or challenge."
                  className={`${inputClasses} min-h-[100px] resize-y`}
                />
              </div>
              {error && (
                <p className="text-[13px] leading-relaxed text-[#B3261E]">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="mt-1.5 rounded-full bg-brand px-6 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Request a Discovery Call"}
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="bg-bg-tint px-6 py-20 md:px-16">
        <Reveal className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OFFERS.map((offer) => (
            <Link
              key={offer.title}
              to="/contact"
              className="rounded-2xl border border-line bg-white p-6 no-underline transition-colors hover:border-accent-light"
            >
              <div className="mb-2 text-[15px] font-bold text-ink">{offer.title}</div>
              <div className="text-[13px] leading-relaxed text-ink-muted">{offer.body}</div>
            </Link>
          ))}
        </Reveal>
      </section>
    </>
  );
}
