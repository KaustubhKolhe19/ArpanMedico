import {
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { business, navigationItems } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { phoneHref } from "../../lib/display";
import AddressLines from "../common/AddressLines";
import { CONTACT_GOOGLE_MAPS_EMBED_SRC, CONTACT_GOOGLE_MAPS_URL } from "../contact/contactMaps";

const mncBrandsList = ["Ethicon", "Nipro", "Polymed", "BD Medical", "Romsons", "Healthium", "Nulife"];

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
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* Top B2B Wholesale Callout Bar */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-950 via-teal-950/60 to-slate-950 py-7">
        <div className="site-container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20 shadow-md">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-wide">
                Authorized Wholesale Healthcare Partner
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Bulk MNC Pharmaceutical, Surgical Sutures &amp; Hospital Consumables Distribution in Sangamner &amp; MH.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={createWhatsAppUrl("Hello Arpan Medico team, I would like to inquire about wholesale medical products.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-emerald-500 active:scale-95"
            >
              <WhatsAppIcon className="size-4 text-white" />
              <span>WhatsApp Inquiry</span>
            </a>
            <a
              href={phoneHref(business.contact.phone)}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-colors hover:border-teal-500/50 hover:bg-slate-850 hover:text-white"
            >
              <Phone size={15} className="text-teal-400" />
              <span>Direct Hotline (+91 {business.contact.phone})</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Grid */}
      <div className="site-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-14">
        
        {/* Column 1: Brand & Profile (4 cols) */}
        <div className="space-y-4 lg:col-span-4">
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
            Arpan Medico is Sangamner&apos;s leading wholesale distributor of authentic MNC surgical sutures, IV fluids, critical care items, and hospital consumables under the leadership of <strong className="text-slate-200">{business.owner}</strong>.
          </p>

          <div className="pt-2 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-950/80 border border-teal-500/30 px-2.5 py-1 text-[0.7rem] font-medium text-teal-300">
              <Truck size={13} /> Same-Day Dispatch
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 text-[0.7rem] font-medium text-emerald-300">
              <ShieldCheck size={13} /> 100% Genuine MNC
            </span>
          </div>

          {/* Social Links */}
          <div className="pt-3 flex items-center gap-3">
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
            <a
              href={CONTACT_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps Location"
              className="flex size-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-colors hover:border-teal-500/50 hover:bg-slate-800 hover:text-teal-300"
            >
              <MapPin size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation & Catalog (2.5 cols) */}
        <div className="space-y-4 lg:col-span-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Navigation</h4>
          <ul className="space-y-2 text-xs">
            {navigationItems.map((item) => (
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
            <li>
              <Link
                to="/about-owner"
                className="group inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-teal-300"
              >
                <ChevronRight size={12} className="text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-400" />
                <span>Leadership Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/analytics"
                className="group inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-teal-300"
              >
                <ChevronRight size={12} className="text-slate-600 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-400" />
                <span>Business Analytics</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Authorized MNC Brands (2.5 cols) */}
        <div className="space-y-4 lg:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Authorized MNC Partners</h4>
          <p className="text-[0.7rem] text-slate-400">
            Certified distributor of genuine MNC healthcare manufacturers:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {mncBrandsList.map((brand) => (
              <Link
                key={brand}
                to="/brands"
                className="rounded-md border border-slate-800 bg-slate-900/90 px-2.5 py-1 text-[0.7rem] font-medium text-slate-300 transition-colors hover:border-teal-500/40 hover:text-teal-300"
              >
                {brand}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Link
              to="/brands"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
            >
              <span>Explore All Healthcare Brands</span>
              <ExternalLink size={13} />
            </Link>
          </div>
        </div>

        {/* Column 4: Location & Contact (3 cols) */}
        <div className="space-y-4 lg:col-span-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Distribution Hub</h4>
          
          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-teal-400" />
              <div>
                <AddressLines includeDistrict={false} />
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail size={15} className="shrink-0 text-teal-400" />
              <a href={`mailto:${business.contact.email}`} className="hover:text-teal-300 transition-colors truncate">
                {business.contact.email}
              </a>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 shrink-0 text-teal-400" />
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {business.contact.phoneNumbers.map((phoneNumber) => (
                  <a
                    key={phoneNumber}
                    href={phoneHref(phoneNumber)}
                    className="hover:text-teal-300 transition-colors"
                  >
                    +91 {phoneNumber}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Map Preview Card */}
          <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-md">
            <div className="h-28 w-full overflow-hidden">
              <iframe
                title={`${business.name} location map`}
                src={CONTACT_GOOGLE_MAPS_EMBED_SRC}
                className="block h-full w-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <a
              href={CONTACT_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-slate-900/90 px-3 py-2 text-[0.7rem] font-semibold text-slate-300 hover:text-teal-300 transition-colors border-t border-slate-800"
            >
              <span>Kadlag Complex, Sangamner</span>
              <span className="flex items-center gap-1 text-teal-400">
                Directions <ExternalLink size={11} />
              </span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright & Credit Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-5 text-xs text-slate-500">
        <div className="site-container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-300">{business.name}</strong>. All rights reserved. Wholesale Healthcare Supplies Sangamner.
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
