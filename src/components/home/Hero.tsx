import {
  ArrowRight,
  Award,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { showcaseBrands } from "../../data/brands";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { phoneHref } from "../../lib/display";

function Hero() {
  const [hasLogo, setHasLogo] = useState(true);

  const trustHighlights = [
    { icon: ShieldCheck, title: "100% Genuine", desc: "MNC Healthcare Brands" },
    { icon: Truck, title: "Fast Dispatch", desc: "Sangamner & Maharashtra" },
    { icon: Zap, title: "Wholesale Rates", desc: "Direct B2B Pricing" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-teal-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 -z-10 size-[25rem] rounded-full bg-emerald-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-64 w-full bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Decorative subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#0f766e_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="site-container hero-pad grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
        {/* Left Column: Headline & Call To Action */}
        <div className="max-w-2xl">
          {/* Location & Trust Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-500/30 bg-teal-950/60 px-3.5 py-1.5 text-xs font-semibold text-teal-300 backdrop-blur-md">
            <span className="tracking-wide">Authorized Wholesale Supplier</span>
            <span className="text-teal-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin size={12} className="text-teal-400" />
              {business.address.city}, {business.address.state}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="page-title mt-5 font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            Trusted Partner for{" "}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-200 to-teal-400 bg-clip-text text-transparent">
              Surgical, Medical &amp; Hospital
            </span>{" "}
            Supplies.
          </h1>

          {/* Subtitle description */}
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {business.name} supplies genuine MNC surgical products, injectable medicines, IV fluids, and hospital consumables across {business.address.city} and Maharashtra.
          </p>

          {/* Primary CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href={createWhatsAppUrl("Hello Arpan Medico, I would like to place an enquiry for medical & surgical supplies.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary relative group overflow-hidden shadow-lg shadow-teal-900/40 px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircle size={18} className="transition-transform group-hover:scale-110" aria-hidden="true" />
              Enquire on WhatsApp
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <a
              href={phoneHref(business.contact.phone)}
              className="btn btn-outline-light px-5 py-3.5 text-sm font-semibold transition-all hover:bg-white/10"
            >
              <Phone size={17} aria-hidden="true" />
              Call: {business.contact.phone}
            </a>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-teal-200 hover:underline sm:ml-2"
            >
              Browse Catalog
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
            {trustHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-teal-400">
                    <Icon size={16} />
                    <span className="text-xs font-bold text-white sm:text-sm">{item.title}</span>
                  </div>
                  <p className="text-[0.75rem] text-slate-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Modern Glassmorphic Business Showcase Card */}
        <div className="relative">
          {/* Card glow effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 opacity-20 blur-lg transition duration-500 group-hover:opacity-40" />

          <div className="relative rounded-2xl border border-white/15 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-7">
            {/* Header: Logo & City */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                {hasLogo ? (
                  <img
                    src="/images/logo/arpan-medico-logo.png"
                    alt={`${business.name} logo`}
                    loading="eager"
                    decoding="async"
                    className="h-10 w-auto max-w-36 object-contain"
                    onError={() => setHasLogo(false)}
                  />
                ) : (
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-600 font-bold text-white">
                    AM
                  </span>
                )}
                <div>
                  <h2 className="text-base font-bold tracking-tight text-white">{business.name}</h2>
                  <p className="text-xs text-slate-400">{business.address.city}, {business.address.state}</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2.5 py-1 text-[0.7rem] font-semibold text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 size={12} /> Verified Supplier
              </span>
<<<<<<< HEAD
            )}
            <p className="text-sm leading-6 text-slate-400">
              {business.address.city}
              <br />
              {business.address.state}
            </p>
          </div>
          <p className="section-eyebrow mt-6 text-teal-300">Wholesale supply</p>
          <ol className="mt-2">
            {business.categories.map((category, index) => (
              <li
                key={category}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3 last:border-0"
              >
                <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-teal-300">
                  {String(index + 1).padStart(2, "0")}
=======
            </div>

            {/* Business Categories List */}
            <div className="mt-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-teal-300">
                Core Supply Offerings
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {business.categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center gap-2 rounded-lg border border-white/5 bg-slate-800/50 px-3 py-2.5 text-xs font-medium text-slate-200 transition hover:border-teal-500/30 hover:bg-slate-800"
                  >
                    <span className="size-1.5 rounded-full bg-teal-400" />
                    <span>{category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Associated Top MNC Brands Pills */}
            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Award size={14} className="text-teal-400" /> Authorized MNC Brands
>>>>>>> f3cc38868324baac2ebe902eb24138614a520ab5
                </span>
                <Link to="/brands" className="text-[0.75rem] text-teal-400 hover:underline">
                  View All ({showcaseBrands.length})
                </Link>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {showcaseBrands.slice(0, 6).map((brand) => (
                  <span
                    key={brand.id}
                    className="rounded-md border border-white/10 bg-slate-800/70 px-2.5 py-1 text-[0.75rem] font-medium text-slate-300"
                  >
                    {brand.displayName ?? brand.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Leadership & Location Mini Footer */}
            <div className="mt-6 flex items-center justify-between rounded-xl bg-teal-950/40 border border-teal-800/30 p-3.5 text-xs">
              <div>
                <span className="text-[0.68rem] text-teal-300 uppercase tracking-wider block font-semibold">Leadership</span>
                <span className="font-semibold text-white mt-0.5 block">{business.owner}</span>
              </div>
              <div className="text-right">
                <span className="text-[0.68rem] text-slate-400 block">Hub Location</span>
                <span className="font-medium text-slate-300 mt-0.5 block">{business.address.landmark}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
