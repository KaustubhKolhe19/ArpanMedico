import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { business, navigationItems } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { phoneHref } from "../../lib/display";
import AddressLines from "../common/AddressLines";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="site-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1.1fr] lg:gap-14 lg:py-14">
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
          <address className="mt-4 text-sm leading-6 text-slate-400 not-italic">
            <AddressLines />
          </address>
          <a
            href={`mailto:${business.contact.email}`}
            className="mt-3 block break-words text-sm text-slate-300 transition hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
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
