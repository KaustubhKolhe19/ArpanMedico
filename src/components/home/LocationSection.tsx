import { ArrowUpRight, MapPin } from "lucide-react";
import { business } from "../../data/business";
import AddressLines from "../common/AddressLines";

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
          <address className="mt-6 flex gap-3 text-sm leading-7 text-slate-600 not-italic sm:text-base">
            <MapPin className="mt-1 shrink-0 text-teal-700" size={18} aria-hidden="true" />
            <span>
              <AddressLines />
            </span>
          </address>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-secondary mt-6">
            Get Directions
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div
          id="location-map"
          className="flex min-h-52 items-center justify-center border border-slate-200 bg-white px-6 py-10 text-center"
        >
          <div>
            <MapPin size={20} className="mx-auto text-teal-700" aria-hidden="true" />
            <p className="mt-3 text-base font-semibold text-slate-900">
              {address.city}, {address.state}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              An interactive map will be added once the location details are ready for embedding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
