import { ArrowRight, Award, MapPin, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";

function AboutHero() {
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
              Corporate Profile • {business.address.city}, {business.address.state}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            About <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">{business.name}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
            Sangamner&apos;s premier authorized wholesale distributor of genuine MNC pharmaceuticals, sterile surgical sutures, IV fluids, and hospital consumables. Founded &amp; directed by <strong className="text-white">{business.owner}</strong>.
          </p>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href={createWhatsAppUrl("Hello Arpan Medico team, I would like to inquire about surgical and medical supplies.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-xs font-semibold text-white shadow-lg transition-all hover:bg-teal-500"
            >
              <MessageCircle size={16} />
              <span>Inquire on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-xs font-semibold text-slate-200 transition-colors hover:border-teal-500/50 hover:text-white"
            >
              <span>Contact Distribution Hub</span>
              <ArrowRight size={15} className="text-teal-400" />
            </Link>
          </div>
        </div>

        {/* Quick Stat Pill Bar */}
        <div className="mt-10 grid grid-cols-2 gap-3 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-300">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">100% Genuine</p>
              <p className="text-[0.65rem] text-slate-400">MNC Direct Sourced</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
              <Truck size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Same-Day Dispatch</p>
              <p className="text-[0.65rem] text-slate-400">Sangamner &amp; MH</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
              <Award size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">7+ MNC Brands</p>
              <p className="text-[0.65rem] text-slate-400">Ethicon, Nipro, BD</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-300">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Kadlag Complex</p>
              <p className="text-[0.65rem] text-slate-400">Sangamner - 422605</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutHero;
