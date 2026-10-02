import { ArrowRight, Award, Bed, Hospital, MessageCircle, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";

function HospitalSetupHero() {
  const { address } = business;

  const whatsappMessage =
    "Hello Arpan Medico, I am planning a hospital setup and would like to enquire about hospital beds, patient monitors, hospital equipment, hospital machines, surgical equipment, and other required products.";

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
              Hospital Solutions • {address.city}, {address.state}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Complete Hospital Setup{" "}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
            Arpan Medico supports hospitals and clinics with high-quality hospital beds, patient monitors, surgical instruments, medical equipment, and end-to-end consumables.
          </p>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href={createWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              aria-label="Discuss your hospital setup with Arpan Medico on WhatsApp"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-xs font-bold text-white shadow-lg transition-all hover:bg-teal-500 active:scale-95"
            >
              <MessageCircle size={16} />
              <span>Discuss Your Hospital Setup</span>
            </a>
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-xs font-bold text-slate-200 transition-colors hover:border-teal-500/50 hover:text-white"
            >
              <span>Enquire Equipment Supply</span>
              <ArrowRight size={15} className="text-teal-400" />
            </Link>
          </div>
        </div>

        {/* Quick Stat Pill Bar */}
        <div className="mt-10 grid grid-cols-1 gap-3 border-t border-slate-800/80 pt-6 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-300">
              <Hospital size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Complete Setup</p>
              <p className="text-[0.65rem] text-slate-400">Equipment &amp; turnkey supply</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
              <Bed size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Beds &amp; Monitors</p>
              <p className="text-[0.65rem] text-slate-400">ICU, OT &amp; Ward Setup</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
              <Stethoscope size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Surgical Equipment</p>
              <p className="text-[0.65rem] text-slate-400">Surgical tools &amp; machines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HospitalSetupHero;
