import { ArrowRight, Award, MessageSquare, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";

function ProductsHero() {
  const { address } = business;

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
              Wholesale Catalog • {address.city}, {address.state}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Medical, Surgical &amp; <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">Hospital Supplies</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
            Complete inventory catalog of 100% genuine MNC prescription pharmaceuticals, sterile surgical sutures, IV cannulas, IV fluids, and hospital equipment supplied directly to medical institutions across Maharashtra.
          </p>

          {/* Primary Action Button */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center gap-2.5 rounded-lg bg-teal-600 px-5 py-3 text-xs font-bold text-white shadow-lg transition-all hover:bg-teal-500 active:scale-95"
            >
              <MessageSquare size={16} />
              <span>Start a Conversation / Request Quotation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Quick Stat Pill Bar */}
        <div className="mt-10 grid grid-cols-2 gap-3 border-t border-slate-800/80 pt-6 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-300">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">100% MNC Genuine</p>
              <p className="text-[0.65rem] text-slate-400">Ethicon, Nipro, BD, Polymed</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
              <Truck size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Same-Day Express</p>
              <p className="text-[0.65rem] text-slate-400">Sangamner &amp; MH Regional Hub</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3 col-span-2 sm:col-span-1">
            <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
              <Award size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Bulk B2B Rates</p>
              <p className="text-[0.65rem] text-slate-400">Transparent Pricing Structure</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductsHero;
