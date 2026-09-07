import {
  ArrowUpRight,
  Building2,
  Clock,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { business } from "../../data/business";
<<<<<<< HEAD
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
=======
import { phoneHref } from "../../lib/display";

function LocalPresence() {
  const { address, contact } = business;
  const googleMapEmbedUrl = `https://maps.google.com/maps?q=Kadlag%20Complex,%20New%20Nagar%20Road,%20Sangamner,%20Maharashtra%20422605&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="bg-white section-pad" aria-labelledby="local-presence-heading">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-eyebrow text-teal-700">Local Hub Presence</span>
            <h2 id="local-presence-heading" className="section-title mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Wholesale Distribution Hub in {address.city}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            {business.name} operates from Kadlag Complex on New Nagar Road in Sangamner, providing prompt medical &amp; surgical supplies.
          </p>
        </div>

        {/* 2-Column Equal Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Left Column: Structured Address Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-sm sm:p-7">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-teal-100/70 text-teal-800">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-950">{business.name} Warehouse</h3>
                    <p className="text-xs text-slate-500">{address.city}, {address.state}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                  <ShieldCheck size={13} /> Active Location
                </span>
              </div>

              <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-slate-200/60 shadow-2xs">
                  <MapPin size={18} className="text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Full Address</span>
                    <span className="text-slate-600 text-xs">
                      {address.line1}, {address.line2}, {address.street}, {address.city} – {address.postalCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-slate-200/60 shadow-2xs">
                  <Building2 size={18} className="text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Landmark &amp; Region</span>
                    <span className="text-slate-600 text-xs">
                      {address.landmark}, Dist. {address.district}, {address.state}, {address.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-slate-200/60 shadow-2xs">
                  <Clock size={18} className="text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Working Hours</span>
                    <span className="text-slate-600 text-xs">
                      Monday – Saturday: 9:00 AM – 8:30 PM (Counter Pickup Available)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-200/60 pt-5">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary shadow-sm text-xs font-semibold px-5 py-3"
              >
                <Navigation size={15} />
                Open Google Maps
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>

              <a
                href={phoneHref(contact.phone)}
                className="btn btn-secondary text-xs font-semibold px-4 py-3"
              >
                <Phone size={15} />
                Call Supply Hub ({contact.phone})
              </a>
            </div>
          </div>

          {/* Right Column: Real Interactive Google Map */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <MapPin size={18} className="text-teal-700" />
                <span>Interactive Location Map</span>
              </div>
              <span className="rounded-md bg-teal-50 px-2.5 py-0.5 text-[0.75rem] font-semibold text-teal-800 border border-teal-200">
                {address.city}, {address.state}
              </span>
            </div>

            <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-inner">
              <iframe
                title={`${business.name} About Page Location Map`}
                src={googleMapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="mt-3.5 flex items-center justify-between text-xs text-slate-500 px-1">
              <span className="flex items-center gap-1 font-medium text-slate-600">
                <MapPin size={13} className="text-teal-600" />
                {address.landmark}, {address.street}
              </span>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-teal-700 hover:underline flex items-center gap-1"
              >
                Get Directions <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
>>>>>>> f3cc38868324baac2ebe902eb24138614a520ab5
        </div>
      </div>
    </section>
  );
}

export default LocalPresence;
