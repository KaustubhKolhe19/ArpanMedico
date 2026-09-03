import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import AddressLines from "../components/common/AddressLines";
import PageHero from "../components/common/PageHero";
import { business } from "../data/business";
import { createWhatsAppUrl } from "../lib/whatsapp";
import { phoneHref } from "../lib/display";

function Contact() {
  const { address, contact } = business;
  const pageTitle = `Contact ${business.name} | ${address.city}`;
  const pageDescription = `Contact ${business.name} for medical, surgical and hospital supply enquiries in ${address.city}, ${address.state}.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="/contact" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/contact" />
      </Helmet>
      <PageHero
        eyebrow="Contact"
        title={`Contact ${business.name}.`}
        description={`Send an enquiry, call, or visit the confirmed location in ${address.city}.`}
        locationLabel={address.city}
        locationHint={`${address.state}, ${address.country}`}
      />
      <section className="bg-white section-pad" aria-labelledby="contact-details-heading">
        <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <p className="section-eyebrow text-teal-700">Enquiries</p>
            <h2 id="contact-details-heading" className="section-title text-slate-950">
              Have a requirement?
            </h2>
            <p className="body-copy mt-3">
              Contact {business.name} about your medical, surgical or hospital supply requirement.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn btn-primary">
                <MessageCircle size={17} aria-hidden="true" />
                Enquire on WhatsApp
              </a>
              <a href={phoneHref(contact.phone)} className="btn btn-secondary">
                <Phone size={17} aria-hidden="true" />
                Call Us
              </a>
            </div>
          </div>
          <div className="divide-y divide-slate-200 border-t border-slate-200 lg:border-l lg:border-t-0 lg:pl-12">
            <div className="py-5 first:pt-6 lg:first:pt-0">
              <p className="section-eyebrow flex items-center gap-2 text-slate-400">
                <Mail size={13} aria-hidden="true" />
                Email
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block break-words text-base font-medium leading-7 text-slate-800 transition hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                {contact.email}
              </a>
            </div>
            <div className="py-5">
              <p className="section-eyebrow flex items-center gap-2 text-slate-400">
                <Phone size={13} aria-hidden="true" />
                Phone
              </p>
              <div className="mt-2 grid gap-1.5">
                {contact.phoneNumbers.map((phoneNumber) => (
                  <a
                    key={phoneNumber}
                    href={phoneHref(phoneNumber)}
                    className="text-base font-medium tracking-tight text-slate-800 transition hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  >
                    {phoneNumber}
                  </a>
                ))}
              </div>
            </div>
            <div className="py-5">
              <p className="section-eyebrow flex items-center gap-2 text-slate-400">
                <MapPin size={13} aria-hidden="true" />
                Address
              </p>
              <address className="mt-2 text-sm leading-7 text-slate-700 not-italic">
                <AddressLines />
              </address>
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="btn-link mt-4">
                Get Directions
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50" aria-label="Location map placeholder">
        <div className="site-container py-10 lg:py-12">
          <div className="flex min-h-48 items-center justify-center border border-slate-200 bg-white px-6 py-12 text-center">
            <div>
              <MapPin size={20} className="mx-auto text-teal-700" aria-hidden="true" />
              <p className="mt-3 font-semibold text-slate-900">
                {address.city}, {address.state}
              </p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                An interactive map will be added once the location details are ready for embedding.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
