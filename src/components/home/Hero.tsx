import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { business } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { displayCategory, phoneHref } from "../../lib/display";

function Hero() {
  const [hasLogo, setHasLogo] = useState(true);

  return (
    <section className="bg-slate-950 text-white">
      <div className="site-container hero-pad grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-teal-300">
            {business.address.city}, {business.address.state}
          </p>
          <h1 className="page-title mt-4">{business.name}</h1>
          <p className="mt-4 max-w-lg text-[0.975rem] leading-7 text-slate-300 sm:text-base sm:leading-7">
            {business.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn btn-primary">
              <MessageCircle size={17} aria-hidden="true" />
              Enquire on WhatsApp
            </a>
            <a href={phoneHref(business.contact.phone)} className="btn btn-outline-light">
              <Phone size={17} aria-hidden="true" />
              Call Us
            </a>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={15} className="text-teal-300" aria-hidden="true" />
            {business.address.city}, {business.address.state}
          </p>
        </div>

        <div className="border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <div className="flex items-center gap-4 border-b border-white/10 pb-5">
            {hasLogo ? (
              <img
                src="/images/logo/arpan-medico-logo.png"
                alt={`${business.name} logo`}
                className="h-11 w-auto max-w-40 object-contain"
                onError={() => setHasLogo(false)}
              />
            ) : (
              <span className="flex size-11 shrink-0 items-center justify-center bg-teal-700 text-base font-semibold text-white">
                AM
              </span>
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
                </span>
                <span className="flex-1 text-sm font-medium text-white">{displayCategory(category)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;