import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";
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
  showCall = true,
}: EnquiryCTAProps) {
  return (
    <section className="bg-teal-700 text-white" aria-labelledby="enquiry-cta-heading">
      <div className="site-container flex flex-col gap-6 py-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-10">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-teal-100">{eyebrow}</p>
          <h2 id="enquiry-cta-heading" className="section-title text-white">
            {title}
          </h2>
          {description ? <p className="mt-3 max-w-xl text-sm leading-6 text-teal-50 sm:text-[0.975rem]">{description}</p> : null}
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link to="/contact#contact-form" className="btn btn-on-dark">
            <MessageSquare size={17} aria-hidden="true" />
            <span>Start a Conversation</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>

          {showCall ? (
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
