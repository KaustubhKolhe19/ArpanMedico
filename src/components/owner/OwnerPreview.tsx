import { ArrowRight, Award, Mail, Phone, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { owner } from "../../data/owner";
import { phoneHref } from "../../lib/display";
import OwnerPortrait from "./OwnerPortrait";

function OwnerPreview() {
  return (
    <section className="bg-white section-pad" aria-labelledby="owner-preview-heading">
      <div className="site-container">
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1.65fr)] lg:gap-12">
            {/* Owner Portrait */}
            <div className="flex justify-center lg:justify-start">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <OwnerPortrait compact />
              </div>
            </div>

            {/* Owner Details */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 border border-teal-200/60">
                <UserCheck size={14} className="text-teal-700" />
                <span>Executive Leadership</span>
              </div>

              <h2 id="owner-preview-heading" className="section-title mt-3 text-3xl font-bold tracking-tight text-slate-950">
                {owner.name}
              </h2>

              <p className="mt-1 text-sm font-semibold text-teal-800 flex items-center gap-2">
                <Award size={16} />
                {owner.designation} · {owner.business}
              </p>

              <p className="body-copy mt-4 text-slate-600 leading-7">{owner.introduction}</p>

              {/* Focus tags */}
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-slate-500 uppercase tracking-wider">Key Focus:</span>
                {owner.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-md bg-white border border-slate-200 px-2.5 py-1 font-medium text-slate-700 shadow-2xs"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link to="/about-owner" className="btn btn-primary text-xs font-semibold shadow-sm">
                  View Full Owner Profile
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>

                <a
                  href={phoneHref(owner.phone)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-800"
                >
                  <Phone size={14} className="text-teal-700" />
                  Call Direct: {owner.phone}
                </a>

                <a
                  href={`mailto:${owner.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-800"
                >
                  <Mail size={14} className="text-teal-700" />
                  {owner.email}
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
