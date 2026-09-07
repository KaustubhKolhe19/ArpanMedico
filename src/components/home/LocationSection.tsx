import { ArrowUpRight, MapPin } from "lucide-react";
import { business } from "../../data/business";
import { CONTACT_GOOGLE_MAPS_EMBED_SRC, CONTACT_GOOGLE_MAPS_URL } from "../contact/contactMaps";

function LocationSection() {
  const { address } = business;

  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="location-heading">
      <div className="site-container grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <p className="section-eyebrow text-teal-700">Local presence</p>
          <h2 id="location-heading" className="section-title text-slate-950">
            Visit {business.name} in Sangamner.
          </h2>
          <p className="mt-6 flex gap-3 text-sm leading-7 text-slate-600 sm:text-base">
            <MapPin className="mt-1 shrink-0 text-teal-700" size={18} aria-hidden="true" />
            <span>{address.city}, {address.state}</span>
          </p>
          <a href={CONTACT_GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-6">
            Get Directions
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div id="location-map" className="min-h-52 overflow-hidden border border-slate-200 bg-white">
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

export default LocationSection;
