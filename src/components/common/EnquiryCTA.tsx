import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { phoneHref } from "../../lib/display";

type EnquiryCTAProps = {
  eyebrow: string;
  title: string;
  description?: string;
  whatsappMessage?: string;
  showCall?: boolean;
  contactLink?: boolean;
};

function EnquiryCTA({
  eyebrow,
  title,
  description,
  whatsappMessage,
  showCall = true,
  contactLink = false,
}: EnquiryCTAProps) {
  return (
    <section className="bg-teal-700 text-white" aria-labelledby="enquiry-cta-heading">
      <div className="site-container flex flex-col gap-6 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-16">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-teal-100">{eyebrow}</p>
          <h2 id="enquiry-cta-heading" className="section-title text-white">
            {title}
          </h2>
          {description ? <p className="mt-3 max-w-xl text-sm leading-6 text-teal-50 sm:text-[0.975rem]">{description}</p> : null}
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          {contactLink ? (
            <Link to="/contact" className="btn btn-on-dark">
              <MessageCircle size={17} aria-hidden="true" />
              Send an Enquiry
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ) : (
            <a href={createWhatsAppUrl(whatsappMessage)} target="_blank" rel="noreferrer" className="btn btn-on-dark">
              <MessageCircle size={17} aria-hidden="true" />
              Enquire on WhatsApp
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          )}
          {showCall && !contactLink ? (
            <a href={phoneHref(business.contact.phone)} className="btn btn-outline-light">
              <Phone size={17} aria-hidden="true" />
              Call Us
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default EnquiryCTA;
