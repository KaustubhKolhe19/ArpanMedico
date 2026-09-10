import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { business, navigationItems } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { phoneHref } from "../../lib/display";
import AddressLines from "../common/AddressLines";
import { CONTACT_GOOGLE_MAPS_EMBED_SRC, CONTACT_GOOGLE_MAPS_URL } from "../contact/contactMaps";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="site-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.85fr_1fr_1.15fr] lg:gap-10 lg:py-14">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
          >
            <span className="flex size-7 items-center justify-center bg-teal-600 text-xs font-bold text-white">
              AM
            </span>
            <span className="text-base font-semibold tracking-tight">{business.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">{business.description}</p>
          <p className="mt-2 text-sm text-slate-500">
            {business.address.city}, {business.address.state}
          </p>
          <div className="mt-5 flex items-center gap-2" aria-label="Social media">
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

        <div>
          <h2 className="section-eyebrow text-white">Quick links</h2>
          <nav className="mt-4" aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navigationItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-300 transition hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h2 className="section-eyebrow text-white">Contact</h2>
          <a
            href={`mailto:${business.contact.email}`}
            className="mt-4 block break-words text-sm text-slate-300 transition hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
          >
            {business.contact.email}
          </a>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-400">
            {business.contact.phoneNumbers.map((phoneNumber) => (
              <a
                key={phoneNumber}
                href={phoneHref(phoneNumber)}
                className="transition hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
              >
                {phoneNumber}
              </a>
            ))}
          </div>
          <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn btn-primary mt-5">
            <MessageCircle size={16} aria-hidden="true" />
            Enquire on WhatsApp
          </a>
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
      <div className="border-t border-white/10">
        <div className="site-container py-4 text-xs text-slate-500">
          Copyright {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
