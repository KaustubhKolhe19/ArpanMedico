import { Mail, MessageCircle, Phone } from "lucide-react";
import { owner } from "../../data/owner";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { phoneHref } from "../../lib/display";
import OwnerPortrait from "./OwnerPortrait";

type OwnerProfileSectionProps = { compact?: boolean };

function OwnerProfileSection({ compact = false }: OwnerProfileSectionProps) {
  return (
    <section className={`bg-white ${compact ? "py-12 sm:py-14" : "section-pad"}`} aria-labelledby="owner-profile-heading">
      <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1.62fr)] lg:items-center lg:gap-14">
        <OwnerPortrait compact={compact} />
        <div>
          <p className="section-eyebrow text-teal-700">Meet the business owner</p>
          <h2 id="owner-profile-heading" className="section-title text-slate-950">
            {owner.name}
          </h2>
          <p className="mt-2 text-sm font-medium text-slate-600">
            {owner.designation} · {owner.business}
          </p>
          <p className="body-copy mt-4">{owner.introduction}</p>
          <dl className="mt-6 grid gap-5 border-y border-slate-200 py-5 sm:grid-cols-3">
            <div>
              <dt className="section-eyebrow text-teal-700">Business</dt>
              <dd className="mt-2 text-sm font-medium text-slate-700">{owner.business}</dd>
            </div>
            <div>
              <dt className="section-eyebrow text-teal-700">Location</dt>
              <dd className="mt-2 text-sm font-medium text-slate-700">{owner.location}</dd>
            </div>
            <div>
              <dt className="section-eyebrow text-teal-700">Business focus</dt>
              <dd className="mt-2 text-sm font-medium text-slate-700">{owner.businessFocus}</dd>
            </div>
          </dl>
          {owner.qualification ? (
            <p className="mt-5 text-sm font-medium text-slate-600">Qualification: {owner.qualification}</p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={phoneHref(owner.phone)} className="btn btn-secondary">
              <Phone size={16} aria-hidden="true" />
              Call Business
            </a>
            <a
              href={createWhatsAppUrl("Hello Arpan Medico, I would like to make an enquiry.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Enquire on WhatsApp
            </a>
            <a href={`mailto:${owner.email}`} className="btn-link">
              <Mail size={16} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OwnerProfileSection;
