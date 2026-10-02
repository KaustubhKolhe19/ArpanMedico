import {
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { phoneHref } from "../../lib/display";
import { CONTACT_GOOGLE_MAPS_URL } from "../contact/contactMaps";

function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.455h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.177-1.238-6.164-3.486-8.412z" />
    </svg>
  );
}

function Footer() {
  const footerNavigationItems = [
    { label: "Home", to: "/" },
    { label: "About Arpan Medico", to: "/about" },
    { label: "Medical & Surgical Products", to: "/products" },
    { label: "Healthcare Brands", to: "/brands" },
    { label: "Industries We Serve", to: "/industries" },
    { label: "Hospital Setup", to: "/hospital-setup" },
    { label: "Contact Arpan Medico", to: "/contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <style>{`
        .footer-content-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: start;
          width: 100%;
        }

        .footer-content-grid > * {
          min-width: 0;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-content-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .footer-content-grid {
            grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr) minmax(0, 1.15fr) minmax(0, 1fr);
            column-gap: 64px;
          }
        }
      `}</style>
      <div className="site-container footer-content-grid grid items-start gap-7 py-8 lg:py-10">
        <div className="min-w-0 space-y-3">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400 group"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-teal-600 font-extrabold text-sm text-white shadow-md transition-transform group-hover:scale-105">
              AM
            </span>
            <div>
              <span className="block text-lg font-extrabold tracking-tight text-white">{business.name}</span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-widest text-teal-400">
                Wholesale Medical &amp; Surgical Supplies
              </span>
            </div>
          </Link>

          <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
            Arpan Medico supplies medical, surgical and hospital products in Sangamner, Maharashtra.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/arpan_medico_sangamner?stkn=dWg0emRod2VnYzFt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-colors hover:border-teal-500/50 hover:bg-slate-800 hover:text-teal-300"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={createWhatsAppUrl("Hello Arpan Medico, I would like to enquire about surgical supplies.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-colors hover:border-emerald-500/50 hover:bg-emerald-950 hover:text-emerald-400"
            >
              <WhatsAppIcon className="size-4 text-emerald-400" />
            </a>
          </div>
        </div>

        <nav className="min-w-0 space-y-3" aria-label="Footer navigation">
          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Navigation</h4>
          <ul className="space-y-1.5 text-xs">
            {footerNavigationItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-teal-300"
                >
                  <ChevronRight size={12} className="text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-400" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="min-w-0 space-y-3" aria-labelledby="footer-distribution">
          <h4 id="footer-distribution" className="text-xs font-bold uppercase tracking-wider text-teal-400">Distribution Hub</h4>
          
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-teal-400" />
              <div className="leading-relaxed">
                <div>{business.address.line1}</div>
                <div>
                  {business.address.line2}, {business.address.landmark}
                </div>
                <div>
                  {business.address.street}, {business.address.city} -{" "}
                  {business.address.postalCode}
                </div>
                <div>
                  {business.address.state}, {business.address.country}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail size={15} className="shrink-0 text-teal-400" />
              <a href={`mailto:${business.contact.email}`} className="whitespace-nowrap transition-colors hover:text-teal-300">
                {business.contact.email}
              </a>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 shrink-0 text-teal-400" />
              <div className="grid grid-cols-1 gap-y-1 lg:grid-cols-2 lg:gap-x-3">
                {business.contact.phoneNumbers.map((phoneNumber) => (
                  <a
                    key={phoneNumber}
                    href={phoneHref(phoneNumber)}
                    className="whitespace-nowrap text-xs transition-colors hover:text-teal-300"
                  >
                    +91 {phoneNumber}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href={CONTACT_GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-[0.7rem] font-semibold text-slate-300 transition-colors hover:border-teal-500/50 hover:text-teal-300"
          >
            <span>Get Directions</span>
            <ExternalLink size={11} />
          </a>
        </section>

        <section className="min-w-0 space-y-3" aria-labelledby="footer-conversation">
          <h4 id="footer-conversation" className="text-xs font-bold uppercase tracking-wider text-teal-400">
            Start a Conversation
          </h4>
          <div className="space-y-1.5">
            <p className="text-sm font-semibold leading-snug text-white">
              Looking for medical, surgical or hospital supplies?
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              Contact Arpan Medico in Sangamner with your requirement.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={createWhatsAppUrl("Hello Arpan Medico, I would like to enquire about medical, surgical or hospital supplies.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              <WhatsAppIcon className="size-4 text-white" />
              WhatsApp Enquiry
            </a>
            <a
              href={phoneHref(business.contact.phone)}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-teal-500/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
            >
              <Phone size={15} className="text-teal-400" />
              Call Us
            </a>
          </div>
        </section>

      </div>

      {/* Bottom Copyright & Credit Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-4 text-xs text-slate-500">
        <div className="site-container flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 <strong className="text-slate-300">{business.name}</strong>. All rights reserved.
          </p>
          <p className="text-[0.7rem] text-slate-500">
            Designed &amp; Developed by <span className="text-slate-400 font-medium">Nilesh Kotkar</span> &amp; <span className="text-slate-400 font-medium">Kaustubh Kolhe</span>
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
