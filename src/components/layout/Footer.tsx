import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { business, navigationItems } from "../../data/business";
import { productCategories } from "../../data/products";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { phoneHref } from "../../lib/display";
<<<<<<< HEAD
import AddressLines from "../common/AddressLines";
import { CONTACT_GOOGLE_MAPS_EMBED_SRC, CONTACT_GOOGLE_MAPS_URL } from "../contact/contactMaps";
=======
>>>>>>> f3cc38868324baac2ebe902eb24138614a520ab5

function Footer() {
  const [hasLogo, setHasLogo] = useState(true);

  return (
<<<<<<< HEAD
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="site-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.85fr_1fr_1.15fr] lg:gap-10 lg:py-14">
=======
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-slate-300">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px]" />

      {/* Main Footer Grid (4 Columns) */}
      <div className="site-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr_1.2fr] lg:gap-12 lg:py-14">
        {/* Column 1: Company Profile & Trust Badge */}
>>>>>>> f3cc38868324baac2ebe902eb24138614a520ab5
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
            aria-label={`${business.name} home`}
          >
            {hasLogo ? (
              <img
                src="/images/logo/arpan-medico-logo.png"
                alt={`${business.name} logo`}
                loading="lazy"
                decoding="async"
                className="h-9 w-auto max-w-36 object-contain"
                onError={() => setHasLogo(false)}
              />
            ) : (
              <span className="flex size-9 items-center justify-center rounded-lg bg-teal-600 text-sm font-bold text-white shadow-sm">
                AM
              </span>
            )}
            <span className="text-lg font-bold tracking-tight text-white">{business.name}</span>
          </Link>

          <p className="mt-3.5 max-w-sm text-xs leading-6 text-slate-400">
            Trusted wholesale supplier of medicines, surgical instruments, hospital consumables, and MNC healthcare products based in {business.address.city}, Maharashtra.
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-teal-400">
            <ShieldCheck size={16} />
            <span>Authorized MNC Healthcare Distributor</span>
          </div>

          <p className="mt-1.5 text-xs text-slate-500">
            Under the leadership of <strong className="text-slate-300 font-semibold">{business.owner}</strong>
          </p>
          <div className="mt-5 flex items-center gap-2" aria-label="Social media">
            {/* TODO: Replace with actual LinkedIn URL */}
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              aria-label="LinkedIn"
              title="LinkedIn"
              className="flex size-9 items-center justify-center text-slate-400 transition-colors hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              <svg viewBox="0 0 24 24" className="size-[17px]" fill="currentColor" aria-hidden="true">
                <path d="M5.1 3.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM3.5 8.5h3.2V20H3.5V8.5Zm5.1 0h3.05v1.57h.04c.42-.79 1.46-1.83 3.52-1.83 3.76 0 4.46 2.47 4.46 5.68V20h-3.2v-5.39c0-1.29-.02-2.94-1.97-2.94-1.97 0-2.27 1.42-2.27 2.85V20H8.6V8.5Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/arpan_medico_sangamner?stkn=dWg0emRod2VnYzFt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="flex size-9 items-center justify-center text-slate-400 transition-colors hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              <svg viewBox="0 0 24 24" className="size-[17px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* TODO: Replace with actual Facebook URL */}
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              aria-label="Facebook"
              title="Facebook"
              className="flex size-9 items-center justify-center text-slate-400 transition-colors hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              <svg viewBox="0 0 24 24" className="size-[17px]" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V4a22.7 22.7 0 0 0-2.47-.13c-2.45 0-4.13 1.5-4.13 4.25V10H7.4v3h2.7v8h3.4Z" />
              </svg>
            </a>
            <a
              href={createWhatsAppUrl(
                "Hello Arpan Medico, I would like to enquire about your medical and surgical supplies. Please share the product details, availability, and pricing.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="flex size-9 items-center justify-center text-slate-400 transition-colors hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              <svg viewBox="0 0 24 24" className="size-[17px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M20.5 3.5A11.8 11.8 0 0 0 3.4 19.8L2.5 22l2.3-.8A11.8 11.8 0 0 0 20.5 3.5Z" />
                <path d="M8.3 6.9c.2-.2.5-.2.7.1l1 1.7c.2.3.1.6-.1.8l-.7.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.7c.2-.2.5-.3.8-.1l1.7 1c.3.2.3.5.1.7l-.5.7c-.4.6-1.1.9-1.8.7-3.6-1-5.8-3.2-6.8-6.8-.2-.7.1-1.4.7-1.8l.7-.5Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="section-eyebrow text-teal-300 font-semibold">Quick Navigation</h3>
          <nav className="mt-4" aria-label="Footer navigation">
            <ul className="space-y-2.5 text-xs font-medium">
              {navigationItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-slate-300 transition hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/about-owner"
                  className="text-slate-300 transition hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                >
                  Meet Business Owner
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Column 3: Core Categories */}
        <div>
<<<<<<< HEAD
          <h2 className="section-eyebrow text-white">Contact</h2>
          <a
            href={`mailto:${business.contact.email}`}
            className="mt-4 block break-words text-sm text-slate-300 transition hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            {business.contact.email}
          </a>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-400">
=======
          <h3 className="section-eyebrow text-teal-300 font-semibold">Product Supply</h3>
          <ul className="mt-4 space-y-2.5 text-xs font-medium text-slate-300">
            {productCategories.map((cat) => (
              <li key={cat.id}>
                <Link
                  to="/products"
                  className="transition hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/brands"
                className="text-teal-400 transition hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
              >
                MNC Healthcare Brands →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Warehouse Hub */}
        <div>
          <h3 className="section-eyebrow text-teal-300 font-semibold">Supply Hub &amp; Contact</h3>

          <address className="mt-4 space-y-2.5 text-xs leading-5 text-slate-300 not-italic">
            <div className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-teal-400" aria-hidden="true" />
              <span>
                {business.address.line1}, {business.address.line2}, {business.address.landmark}, {business.address.street}, {business.address.city} – {business.address.postalCode}, Dist. {business.address.district}, {business.address.state}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <Clock size={14} className="shrink-0 text-teal-400" aria-hidden="true" />
              <span>Mon – Sat: 9:00 AM – 8:30 PM</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} className="shrink-0 text-teal-400" aria-hidden="true" />
              <a
                href={`mailto:${business.contact.email}`}
                className="transition hover:text-teal-300 break-all"
              >
                {business.contact.email}
              </a>
            </div>
          </address>

          {/* Direct Phone Hotlines */}
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
            <Phone size={14} className="shrink-0 text-teal-400" aria-hidden="true" />
>>>>>>> f3cc38868324baac2ebe902eb24138614a520ab5
            {business.contact.phoneNumbers.map((phoneNumber) => (
              <a
                key={phoneNumber}
                href={phoneHref(phoneNumber)}
                className="transition hover:text-teal-300"
              >
                {phoneNumber}
              </a>
            ))}
          </div>

          {/* Direct WhatsApp CTA */}
          <div className="mt-4">
            <a
              href={createWhatsAppUrl("Hello Arpan Medico, I have a bulk supply enquiry.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full text-xs font-semibold shadow-md"
            >
              <MessageCircle size={15} aria-hidden="true" />
              Enquire on WhatsApp
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="section-eyebrow text-white">Location</h2>
          <address className="mt-4 text-sm leading-6 text-slate-400 not-italic">
            <AddressLines includeDistrict={false} />
          </address>
          <div className="mt-4 h-[180px] w-full max-w-[300px] overflow-hidden rounded-xl border border-white/10 sm:h-[160px]">
            <iframe
              title={`${business.name} location map`}
              src={CONTACT_GOOGLE_MAPS_EMBED_SRC}
              className="block h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <a
            href={CONTACT_GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-sm text-slate-300 transition hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            View on Google Maps ↗
          </a>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-white/10 bg-slate-950/80">
        <div className="site-container flex flex-col items-center justify-between gap-3 py-4 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} <strong className="font-semibold text-slate-300">{business.name}</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Sangamner, Maharashtra</span>
            <span>•</span>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-teal-300 flex items-center gap-1"
            >
              Google Maps Location <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
