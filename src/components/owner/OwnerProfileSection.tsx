import { ArrowRight, Building2, GraduationCap, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { owner } from "../../data/owner";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { phoneHref } from "../../lib/display";
import OwnerPortrait from "./OwnerPortrait";

type OwnerProfileSectionProps = { compact?: boolean };

function OwnerProfileSection({ compact = false }: OwnerProfileSectionProps) {
  return (
    <section className={`${compact ? "bg-slate-50 py-12 sm:py-14" : "bg-white section-pad"}`} aria-labelledby="owner-profile-heading">
      <div className="site-container">
        <div className={compact ? "grid gap-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:gap-8 sm:p-6 md:grid-cols-[minmax(220px,260px)_minmax(0,1fr)] md:items-center md:gap-10 lg:p-8" : "grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1.62fr)] lg:items-center lg:gap-14"}>
          {compact ? (
            <div className="mx-auto w-full max-w-[220px] md:mx-0 md:max-w-none">
              <OwnerPortrait compact />
            </div>
          ) : (
            <OwnerPortrait />
          )}
        <div className={compact ? "min-w-0" : undefined}>
          <p className="section-eyebrow text-teal-700">{compact ? "Executive Leadership" : "Meet the business owner"}</p>
          <h2 id="owner-profile-heading" className={`section-title text-slate-950 ${compact ? "mt-2 text-3xl sm:text-4xl" : ""}`}>
            {owner.name}
          </h2>
          <p className="mt-2 text-sm font-semibold text-teal-800">
            {owner.designation} · {compact ? "Arpan Medico" : owner.business}
          </p>

          {compact ? (
            <>
              <dl className="mt-5 grid gap-4 border-y border-slate-200 py-4 sm:grid-cols-3 sm:gap-5">
                <div className="min-w-0">
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
                    <GraduationCap size={14} aria-hidden="true" /> Education
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-slate-800">B.Pharmacy</dd>
                </div>
                <div className="min-w-0">
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
                    <Building2 size={14} aria-hidden="true" /> Business
                  </dt>
                  <dd className="mt-1.5 break-words text-sm font-medium text-slate-800">
                    Arpan Medico – Sangamner
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700">
                    <MapPin size={14} aria-hidden="true" /> Location
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-slate-800">Sangamner, Maharashtra</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Milan Pradip Fargade is the Business Owner of Arpan Medico – Sangamner, a healthcare supply business serving surgical, medical and hospital requirements. With a B.Pharmacy background, he leads the business with a focus on serving healthcare professionals, hospitals, clinics and related institutions with a broad range of medical and surgical products.
              </p>
              <p className="mt-3 text-sm font-medium text-slate-700">
                Business focus: Surgical, Medical &amp; Hospital Supplies
              </p>
            </>
          ) : (
            <>
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
            </>
          )}

          <div className={compact ? "mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center" : "mt-6 flex flex-wrap gap-3"}>
            {compact ? (
              <Link to="/about-owner" className="btn btn-primary min-h-11 justify-center text-xs font-semibold sm:w-fit">
                View Full Owner Profile
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            ) : null}
            {compact ? (
              <a href={phoneHref(owner.phone)} className="btn btn-secondary min-h-11 justify-center sm:w-fit">
                <Phone size={16} aria-hidden="true" />
                Call Direct: {owner.phone}
              </a>
            ) : (
              <a href={phoneHref(owner.phone)} className="btn btn-secondary">
                <Phone size={16} aria-hidden="true" />
                Call Business
              </a>
            )}
            <a
              href={createWhatsAppUrl("Hello Arpan Medico, I would like to make an enquiry.")}
              target="_blank"
              rel="noreferrer"
              className={compact ? "btn btn-secondary min-h-11 justify-center sm:w-fit" : "btn btn-primary"}
            >
              <MessageCircle size={16} aria-hidden="true" />
              Enquire on WhatsApp
            </a>
            {compact ? (
              <a href={`mailto:${owner.email}`} className="btn btn-secondary min-h-11 justify-center text-xs sm:w-fit">
                <Mail size={16} aria-hidden="true" />
                Email Us
              </a>
            ) : (
              <a href={`mailto:${owner.email}`} className="btn-link">
                <Mail size={16} aria-hidden="true" />
                Email
              </a>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default OwnerProfileSection;
