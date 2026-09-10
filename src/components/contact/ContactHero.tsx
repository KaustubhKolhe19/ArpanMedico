import { Award, Mail, Phone } from "lucide-react";
import { business } from "../../data/business";

function ContactHero() {
  const { address, contact } = business;

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      {/* Ambient Medical Glow Effects */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 size-[450px] rounded-full bg-teal-500/10 blur-[120px] animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 size-[450px] rounded-full bg-emerald-500/10 blur-[130px] animate-glow-pulse"
        aria-hidden="true"
      />

      <div className="site-container hero-pad relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/70 px-3.5 py-1.5 backdrop-blur-md">
            <Award size={14} className="text-teal-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
              Wholesale Distribution Center • {address.city}, {address.state}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Contact <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">{business.name}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
            Submit a bulk medical requirement, request product quotations, or speak directly with our wholesale dispatch team in {address.city}.
          </p>
        </div>

        {/* Quick Contact Info Pills */}
        <div className="mt-8 grid grid-cols-1 gap-3 border-t border-slate-800/80 pt-6 sm:grid-cols-2 max-w-xl">
          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
            <div className="flex size-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-300">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-slate-400">Primary Hotline</p>
              <p className="text-xs font-bold text-white">+91 {contact.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
            <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-slate-400">Direct Email</p>
              <p className="text-xs font-bold text-white truncate">{contact.email}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactHero;
