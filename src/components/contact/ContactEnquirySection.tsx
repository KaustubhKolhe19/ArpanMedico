import { ArrowUpRight, Boxes, Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import AddressLines from "../common/AddressLines";
import { business } from "../../data/business";
import { phoneHref } from "../../lib/display";
import { CONTACT_GOOGLE_MAPS_EMBED_SRC, CONTACT_GOOGLE_MAPS_URL } from "./contactMaps";
import ContactActions from "./ContactActions";

const trustItems = [
  { label: "Quick response", icon: MessageCircle },
  { label: "Bulk enquiries", icon: Boxes },
  { label: "Hospital supplies", icon: Building2 },
  { label: "Direct contact", icon: Phone },
] as const;

function ContactEnquirySection() {
  const { contact } = business;

  return (
    <section className="bg-white py-14 md:py-20 lg:py-[5.5rem]" aria-labelledby="contact-enquiry-heading">
      <div className="site-container grid gap-10 lg:grid-cols-12 lg:gap-0">
        <div className="min-w-0 lg:col-span-5 lg:pr-12 xl:pr-16">
          <p className="section-eyebrow text-teal-700">Enquiries</p>
          <h2
            id="contact-enquiry-heading"
            className="mt-2 text-[1.875rem] font-semibold leading-[1.2] tracking-[-0.022em] text-slate-950 text-balance md:text-[2.25rem] lg:text-[2.5rem]"
          >
            Have a requirement?
          </h2>
          <p className="body-copy mt-3">
            Contact {business.name} about your medical, surgical or hospital supply requirement.
          </p>
          <div className="mt-7">
            <ContactActions />
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-3 border-t border-slate-200 pt-5">
            {trustItems.map((item) => (
              <li key={item.label} className="flex min-w-0 items-center gap-2 text-[0.8125rem] font-medium tracking-tight text-slate-500">
                <item.icon size={14} className="shrink-0 text-teal-700" aria-hidden="true" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 lg:col-span-7 lg:border-l lg:border-slate-200 lg:pl-12 xl:pl-16">
          <div className="flex gap-3">
            <Mail size={16} className="mt-0.5 shrink-0 text-teal-700" aria-hidden="true" />
            <div className="min-w-0">
              <p className="section-eyebrow text-slate-400">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block break-all text-base font-medium leading-7 text-slate-800 transition-colors hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:break-words"
              >
                {contact.email}
              </a>
            </div>
          </div>

          <div className="mt-6 flex gap-3 border-t border-slate-200 pt-6">
            <Phone size={16} className="mt-0.5 shrink-0 text-teal-700" aria-hidden="true" />
            <div className="min-w-0">
              <p className="section-eyebrow text-slate-400">Phone</p>
              <div className="mt-2 grid gap-1.5 lg:grid-cols-2 lg:gap-x-8">
                {contact.phoneNumbers.map((phoneNumber) => (
                  <a
                    key={phoneNumber}
                    href={phoneHref(phoneNumber)}
                    className="whitespace-nowrap text-base font-semibold tracking-tight text-slate-800 transition-colors hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  >
                    {phoneNumber}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3 border-t border-slate-200 pt-6">
            <MapPin size={16} className="mt-0.5 shrink-0 text-teal-700" aria-hidden="true" />
            <div className="min-w-0">
              <p className="section-eyebrow text-slate-400">Address</p>
              <address className="mt-2 text-base leading-7 text-slate-700 not-italic">
                <AddressLines />
              </address>
              <a
                href={CONTACT_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link mt-4"
              >
                Get Directions
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgb(15_23_42/0.04),0_6px_16px_rgb(15_23_42/0.05)]">
            <iframe
              title={`${business.name} location on Google Maps`}
              src={CONTACT_GOOGLE_MAPS_EMBED_SRC}
              className="block h-[240px] w-full border-0 sm:h-[260px] lg:h-[280px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactEnquirySection;
