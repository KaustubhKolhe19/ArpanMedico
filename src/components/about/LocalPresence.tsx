import { ArrowUpRight, MapPin } from "lucide-react";
import { business } from "../../data/business";
import AddressLines from "../common/AddressLines";
import { CONTACT_GOOGLE_MAPS_EMBED_SRC, CONTACT_GOOGLE_MAPS_URL } from "../contact/contactMaps";

function LocalPresence() {
  return (
    <section className="bg-white section-pad" aria-labelledby="local-presence-heading">
      <div className="site-container grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div>
          <p className="section-eyebrow text-teal-700">Local presence</p>
          <h2 id="local-presence-heading" className="section-title text-slate-950">
            Located in Sangamner.
          </h2>
          <address className="mt-6 flex gap-3 text-sm leading-7 text-slate-600 not-italic sm:text-base">
            <MapPin size={18} className="mt-1 shrink-0 text-teal-700" aria-hidden="true" />
            <span>
              <AddressLines />
            </span>
          </address>
          <a href={CONTACT_GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-6">
            Get Directions
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="min-h-52 overflow-hidden border border-slate-200 bg-slate-50">
          <iframe
            title={`${business.name} location on Google Maps`}
            src={CONTACT_GOOGLE_MAPS_EMBED_SRC}
            className="block h-[280px] w-full border-0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}

export default LocalPresence;