import { ArrowRight, Award, Mail, Phone, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { owner } from "../../data/owner";
import { phoneHref } from "../../lib/display";
import OwnerPortrait from "./OwnerPortrait";

function OwnerPreview() {
  return (
    <section className="bg-white section-pad" aria-labelledby="owner-preview-heading">
      <div className="site-container">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-[minmax(180px,240px)_minmax(0,1fr)] md:gap-8 lg:gap-10">
            {/* Owner Portrait */}
            <div className="flex justify-center md:justify-start">
              <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-none">
                <OwnerPortrait />
              </div>
            </div>

            {/* Owner Details */}
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800 border border-teal-200/60">
                <UserCheck size={14} className="text-teal-700" />
                <span>Executive Leadership</span>
              </div>

              <h2 id="owner-preview-heading" className="section-title mt-3 break-words text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {owner.name}
              </h2>

              <p className="mt-2 flex flex-wrap items-center gap-2 text-sm font-semibold text-teal-800">
                <Award size={16} />
                {owner.designation} · {owner.business}
              </p>

              <p className="body-copy mt-4 leading-7 text-slate-600">{owner.introduction}</p>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
                Leading Arpan Medico&apos;s healthcare supply operations in Sangamner.
              </p>

              {/* Focus tags */}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-slate-500 uppercase tracking-wider">Key Focus:</span>
                {owner.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-medium text-slate-700"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link to="/about-owner" className="btn btn-primary min-h-11 justify-center text-xs font-semibold shadow-sm sm:w-fit">
                  View Full Owner Profile
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>

                <a
                  href={phoneHref(owner.phone)}
                  className="inline-flex min-h-10 min-w-0 items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-800 sm:justify-start"
                >
                  <Phone size={14} className="text-teal-700" />
                  Call Direct: {owner.phone}
                </a>

                <a
                  href={`mailto:${owner.email}`}
                  className="inline-flex min-h-10 items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-800 sm:justify-start"
                >
                  <Mail size={14} className="text-teal-700" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OwnerPreview;
