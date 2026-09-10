import {
  Activity,
  Award,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  MessageSquare,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { displayCategory, phoneHref } from "../../lib/display";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Ambient Medical Glow Effects */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 size-[500px] rounded-full bg-teal-500/10 blur-[130px] animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-emerald-500/10 blur-[140px] animate-glow-pulse"
        aria-hidden="true"
      />

      {/* Background Medical Grid & ECG Line Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      <div className="site-container hero-pad relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
        
        {/* Left Column: Headline, Trust Badges, CTAs */}
        <div className="max-w-2xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-500/30 bg-teal-950/60 px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full rounded-full bg-teal-400 opacity-75 animate-ping" />
              <span className="relative inline-flex size-2.5 rounded-full bg-teal-400" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
              Authorized MNC Healthcare Partner • {business.address.city}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            Wholesale Medical &amp; <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">
              Surgical Supplies
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
            Sangamner&apos;s trusted wholesale distributor of 100% genuine MNC pharmaceuticals, sterile surgical sutures, IV fluids, and hospital equipment for healthcare facilities across Maharashtra.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              to="/contact#contact-form"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/40 transition-all duration-200 hover:bg-teal-500 hover:shadow-teal-600/30 active:scale-[0.99]"
            >
              <MessageSquare size={18} className="transition-transform group-hover:scale-110" aria-hidden="true" />
              <span>Start a Conversation</span>
              <ChevronRight size={16} className="text-teal-200 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>

            <a
              href={phoneHref(business.contact.phone)}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-teal-500/50 hover:bg-slate-800 hover:text-white"
            >
              <Phone size={18} className="text-teal-400" aria-hidden="true" />
              <span>Call Direct (+91 {business.contact.phone})</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-7 flex flex-wrap items-center gap-y-2 gap-x-6 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-emerald-400" aria-hidden="true" />
              <span>100% Authentic MNC Sourced</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={15} className="text-cyan-400" aria-hidden="true" />
              <span>Same-Day Dispatch Guarantee</span>
            </div>
          </div>
        </div>

        {/* Right Column: Animated Medical Monitor & Floating Cards */}
        <div className="relative py-4">
          {/* Main Visual Monitor Container */}
          <div className="relative rounded-2xl border border-teal-500/20 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl z-10">
            
            {/* Monitor Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
                  <Activity size={20} className="animate-heartbeat" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">24/7 MEDICAL SUPPLY READINESS</h3>
                  <p className="text-xs text-slate-400">Sangamner Central Warehouse</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-2.5 py-1 text-[0.7rem] font-semibold text-emerald-400 border border-emerald-500/30">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE DISPATCH
              </div>
            </div>

            {/* Animated ECG Pulse Waveform Visualizer */}
            <div className="relative my-5 h-28 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/90 p-3">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30" />
              
              <div className="relative z-10 flex items-center justify-between text-[0.65rem] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-teal-400">
                  <HeartPulse size={12} className="animate-heartbeat" /> INVENTORY PULSE: 72 BPM
                </span>
                <span>STATUS: OPERATIONAL</span>
              </div>

              {/* Animated ECG SVG Line */}
              <svg
                viewBox="0 0 500 80"
                className="absolute inset-x-0 bottom-2 h-16 w-full text-teal-400"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 40 L 80 40 L 95 10 L 110 70 L 125 25 L 140 45 L 155 40 L 250 40 L 265 10 L 280 70 L 295 25 L 310 45 L 325 40 L 420 40 L 435 10 L 450 70 L 465 25 L 480 45 L 500 40"
                  fill="none"
                  stroke="url(#ecgGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-ecg"
                />
              </svg>
            </div>

            {/* Core Distribution Categories */}
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Core Wholesale Offerings
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {business.categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center gap-2.5 rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 transition-colors hover:border-teal-500/40 hover:bg-slate-900"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded bg-teal-900/50 text-teal-300">
                      {category.toLowerCase().includes("medicine") && <Syringe size={14} />}
                      {category.toLowerCase().includes("surgical") && <Stethoscope size={14} />}
                      {category.toLowerCase().includes("instrument") && <Award size={14} />}
                    </div>
                    <span className="text-xs font-medium text-slate-200">
                      {displayCategory(category)}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2.5 rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 transition-colors hover:border-teal-500/40 hover:bg-slate-900">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded bg-teal-900/50 text-teal-300">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-xs font-medium text-slate-200">
                    IV Fluids &amp; Consumables
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-800 pt-4 text-center">
              <div className="rounded-lg bg-slate-950/70 p-2.5 border border-slate-800">
                <p className="text-base font-bold text-teal-300">100%</p>
                <p className="text-[0.68rem] font-medium text-slate-300">Genuine Sourced</p>
              </div>
              <div className="rounded-lg bg-slate-950/70 p-2.5 border border-slate-800">
                <p className="text-base font-bold text-emerald-300">7+ MNC</p>
                <p className="text-[0.68rem] font-medium text-slate-300">Direct Partners</p>
              </div>
              <div className="rounded-lg bg-slate-950/70 p-2.5 border border-slate-800">
                <p className="text-base font-bold text-cyan-300">Same-Day</p>
                <p className="text-[0.68rem] font-medium text-slate-300">Express Dispatch</p>
              </div>
            </div>
          </div>

          {/* Floating Glassmorphic Pill - Top Right */}
          <div className="absolute -top-3 -right-3 xl:-right-8 z-20 hidden md:flex items-center gap-3 rounded-xl border border-teal-500/30 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-md animate-float-slow">
            <div className="flex size-9 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Ethicon, Nipro, BD &amp; Polymed</p>
              <p className="text-[0.65rem] text-slate-400">Direct MNC Distribution Partner</p>
            </div>
          </div>

          {/* Floating Glassmorphic Pill - Positioned cleanly outside the main card at bottom right */}
          <div className="absolute -bottom-5 -right-3 xl:-right-8 z-20 hidden md:flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-md animate-float-delayed">
            <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
              <Truck size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Rapid Dispatch Network</p>
              <p className="text-[0.65rem] text-slate-400">Sangamner &amp; Ahilyanagar Region</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
