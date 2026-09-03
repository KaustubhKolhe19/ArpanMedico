import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";

function BrandEnquiryCTA() {
  return (
    <section className="bg-teal-700 text-white" aria-labelledby="brand-enquiry-heading">
      <div className="site-container flex flex-col gap-6 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-16">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-teal-100">Looking for a specific brand?</p>
          <h2 id="brand-enquiry-heading" className="section-title text-white">
            Tell us what you need.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-teal-50 sm:text-[0.975rem]">
            Share your required brand or product and contact {business.name} for an enquiry.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href={createWhatsAppUrl(
              `Hello ${business.name}, I would like to enquire about a specific brand or product.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="btn btn-on-dark"
          >
            <MessageCircle size={17} aria-hidden="true" />
            Enquire on WhatsApp
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <Link to="/contact" className="btn btn-outline-light">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BrandEnquiryCTA;
