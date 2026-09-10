import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import AddressLines from "../common/AddressLines";
import { business } from "../../data/business";
import { phoneHref } from "../../lib/display";
import { CONTACT_GOOGLE_MAPS_EMBED_SRC, CONTACT_GOOGLE_MAPS_URL } from "./contactMaps";
import ContactActions from "./ContactActions";
import ContactForm from "./ContactForm";

function ContactEnquirySection() {
  const { contact } = business;

  return (
    <section className="bg-slate-50 py-12 md:py-16 lg:py-20" aria-labelledby="contact-enquiry-heading">
      <div className="site-container">
        
        {/* Top Grid: Form (7 cols) + Direct Contact Cards (5 cols) */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Formspree Contact Form (7 Columns) */}
          <div className="min-w-0 lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Direct Contact & Hotline Details (5 Columns) */}
          <div className="min-w-0 flex flex-col gap-6 lg:col-span-5">
            
            {/* Instant Inquiry Bar */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700">Instant Inquiry</h3>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Need immediate stock availability or urgent hospital supply?
              </p>
              <div className="mt-4">
                <ContactActions />
              </div>
            </div>

            {/* Direct Contact Details Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-md space-y-4">
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">Email Address</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-0.5 block text-sm font-bold text-slate-900 hover:text-teal-700 transition-colors truncate"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 border-t border-slate-100 pt-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">Direct Phone Hotlines</p>
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs font-bold text-slate-800">
                    {contact.phoneNumbers.map((phoneNumber) => (
                      <a
                        key={phoneNumber}
                        href={phoneHref(phoneNumber)}
                        className="hover:text-teal-700 transition-colors"
                      >
                        +91 {phoneNumber}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 border-t border-slate-100 pt-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0 text-xs">
                  <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">Office &amp; Supply Address</p>
                  <address className="mt-1 font-medium leading-relaxed text-slate-700 not-italic">
                    <AddressLines />
                  </address>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Full-Width Horizontal Google Maps Container */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg">
          
          {/* Map Section Header */}
          <div className="flex flex-col gap-3 border-b border-slate-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between bg-slate-50/70">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-lg bg-teal-700 text-white">
                  <MapPin size={16} />
                </div>
                <h3 className="text-base font-bold text-slate-950">
                  {business.name} Distribution Center Map
                </h3>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                New Navin Nagar Rd, opp. Merchant Bank, Vidhyanagar, Sangamner, Maharashtra 422605
              </p>
            </div>

            <a
              href={CONTACT_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-teal-700 shadow-xs"
            >
              <span>Get Directions on Google Maps</span>
              <ArrowUpRight size={15} className="text-teal-300" />
            </a>
          </div>

          {/* Horizontal Interactive Widescreen Map */}
          <div className="h-80 sm:h-96 md:h-[420px] w-full relative bg-slate-100">
            <iframe
              title={`${business.name} location on Google Maps`}
              src={CONTACT_GOOGLE_MAPS_EMBED_SRC}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {/* Map Footer Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 px-6 py-3.5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-teal-400 shrink-0" />
              <span>Authorized Wholesale Medical &amp; Surgical Distributor</span>
            </div>
            <span className="text-slate-400 text-[0.72rem]">
              Sangamner, District Ahilyanagar (Ahmednagar), MH 422605
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactEnquirySection;
