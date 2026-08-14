import { Link } from "react-router-dom";
import Logo from "./Logo";

const CAPABILITY_LINKS = ["AI Adoption", "Data & Analytics", "Cybersecurity", "Cloud Adoption"];

export default function Footer() {
  return (
    <footer className="border-t-2 border-heading bg-white px-6 pb-8 pt-16 md:px-16">
      <div className="mx-auto grid max-w-[1200px] gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-4">
            <Logo />
          </div>
          <p className="max-w-[280px] text-sm leading-relaxed text-ink-soft">
            An end-to-end technology partner bringing clarity — and production AI — to complex
            enterprise environments.
          </p>
        </div>

        <div>
          <div className="mb-4 text-[13px] font-bold text-ink">Capabilities</div>
          <div className="flex flex-col gap-2.5">
            {CAPABILITY_LINKS.map((label) => (
              <Link
                key={label}
                to="/capabilities"
                className="text-sm text-ink-muted no-underline hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-[13px] font-bold text-ink">Company</div>
          <div className="flex flex-col gap-2.5">
            <Link to="/proof" className="text-sm text-ink-muted no-underline hover:text-ink">
              Proof
            </Link>
            <Link to="/contact" className="text-sm text-ink-muted no-underline hover:text-ink">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <div className="mb-4 text-[13px] font-bold text-ink">Contact</div>
          <div className="flex flex-col gap-2.5 text-sm text-ink-muted">
            <span>results@redapt.ai</span>
            <span>425-882-0400</span>
            <span>Woodinville, WA</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] border-t border-line-soft pt-6 text-[13px] text-ink-faint">
        © 2026 Redapt. All rights reserved.
      </div>
    </footer>
  );
}
