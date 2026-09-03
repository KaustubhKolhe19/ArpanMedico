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

function Footer() {
  const [hasLogo, setHasLogo] = useState(true);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-slate-300">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px]" />

      {/* Main Footer Grid (4 Columns) */}
      <div className="site-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr_1.2fr] lg:gap-12 lg:py-14">
        {/* Column 1: Company Profile & Trust Badge */}
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
