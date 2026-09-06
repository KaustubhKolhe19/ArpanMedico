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
import { phoneHref } from "../../lib/display";

function LocationSection() {
  const { address, contact } = business;
  const googleMapEmbedUrl = `https://maps.google.com/maps?q=Kadlag%20Complex,%20New%20Nagar%20Road,%20Sangamner,%20Maharashtra%20422605&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="bg-slate-50/70 section-pad border-t border-slate-200/60" aria-labelledby="location-heading">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 border border-teal-200/60">
              <Building2 size={14} className="text-teal-700" />
              <span>Local Hub Presence</span>
            </div>
            <h2 id="location-heading" className="section-title mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Visit Our Wholesale Supply Hub in Sangamner
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Our central warehouse and distribution hub is strategically located in Sangamner for fast dispatch across Maharashtra.
          </p>
        </div>

        {/* 2-Column Equal Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Left Column: Structured Address & Contact Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-teal-100/70 text-teal-800">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-950">{business.name} Distribution Hub</h3>
                    <p className="text-xs text-slate-500">{address.city}, {address.state}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                  <ShieldCheck size={13} /> Active Warehouse
                </span>
              </div>

              {/* Address Rows Grid */}
              <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
                {/* Row 1: Address */}
                <div className="flex items-start gap-3 rounded-xl bg-slate-50/70 p-3.5 border border-slate-100">
                  <MapPin size={18} className="text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Full Address</span>
                    <span className="text-slate-600 text-xs sm:text-xs">
                      {address.line1}, {address.line2}, {address.street}, {address.city} – {address.postalCode}
                    </span>
                  </div>
                </div>

                {/* Row 2: Landmark & District */}
                <div className="flex items-start gap-3 rounded-xl bg-slate-50/70 p-3.5 border border-slate-100">
                  <Building2 size={18} className="text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Landmark &amp; District</span>
                    <span className="text-slate-600 text-xs sm:text-xs">
                      {address.landmark}, Dist. {address.district}, {address.state}, {address.country}
                    </span>
                  </div>
                </div>

                {/* Row 3: Operating Hours */}
                <div className="flex items-start gap-3 rounded-xl bg-slate-50/70 p-3.5 border border-slate-100">
                  <Clock size={18} className="text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Operating Hours</span>
                    <span className="text-slate-600 text-xs sm:text-xs">
                      Monday – Saturday: 9:00 AM – 8:30 PM (Counter Pickup Available)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary shadow-sm text-xs font-semibold px-5 py-3"
              >
                <Navigation size={15} />
                Get Google Maps Directions
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

          {/* Right Column: Real Interactive Google Map Container */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            {/* Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <MapPin size={18} className="text-teal-700" />
                <span>Live Interactive Google Map</span>
              </div>
              <span className="rounded-md bg-teal-50 px-2.5 py-0.5 text-[0.75rem] font-semibold text-teal-800 border border-teal-200">
                {address.city}, MH
              </span>
            </div>

            {/* Embedded Google Map */}
            <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-inner">
              <iframe
                title={`${business.name} Sangamner Location Map`}
                src={googleMapEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Quick Footer Info */}
            <div className="mt-3.5 flex items-center justify-between text-xs text-slate-500 px-1">
              <span className="flex items-center gap-1 font-medium text-slate-600">
                <MapPin size={13} className="text-teal-600" />
                {address.line2}, {address.street}
              </span>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-teal-700 hover:underline flex items-center gap-1"
              >
                Open Full Map App <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
