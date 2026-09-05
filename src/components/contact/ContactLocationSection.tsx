import { ArrowUpRight, Navigation } from "lucide-react";
import AddressLines from "../common/AddressLines";
import { business } from "../../data/business";
import { CONTACT_GOOGLE_MAPS_EMBED_SRC, CONTACT_GOOGLE_MAPS_URL } from "./contactMaps";

function ContactLocationSection() {
  const { address } = business;

  return (
    <section className="bg-slate-50 py-12 md:py-16 lg:py-20" aria-labelledby="contact-location-heading">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-teal-700">Business location</p>
          <h2
            id="contact-location-heading"
            className="mt-2 text-[1.875rem] font-semibold leading-[1.2] tracking-[-0.022em] text-slate-950 text-balance md:text-[2.25rem] lg:text-[2.5rem]"
          >
            Find {business.name}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-500">Visit our location in {address.city}.</p>
        </div>

        <div className="mx-auto mt-6 w-full max-w-[800px] lg:mt-7 lg:max-w-[900px]">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgb(15_23_42/0.04),0_6px_16px_rgb(15_23_42/0.05)] lg:rounded-2xl">
            <iframe
              title={`${business.name} location on Google Maps`}
              src={CONTACT_GOOGLE_MAPS_EMBED_SRC}
              className="block h-[280px] w-full border-0 md:h-[320px] lg:h-[340px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="min-w-0">
              <p className="text-base font-semibold tracking-tight text-slate-950">{business.name}</p>
              <address className="mt-2 text-sm leading-7 text-slate-600 not-italic sm:text-base">
                <AddressLines />
              </address>
            </div>
            <a
              href={CONTACT_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary min-h-11 w-full shrink-0 px-5 sm:w-auto lg:min-h-12"
            >
              <Navigation size={16} aria-hidden="true" />
              Open in Google Maps
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactLocationSection;
