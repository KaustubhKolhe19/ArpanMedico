import {
  Bed,
  Building2,
  CheckCircle2,
  FlaskConical,
  Hospital,
  Landmark,
  Microscope,
  Pill,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { industries } from "../../data/industries";
import type { IndustryIconId } from "../../types";

const industryIcons: Record<IndustryIconId, LucideIcon> = {
  hospital: Hospital,
  stethoscope: Stethoscope,
  pill: Pill,
  microscope: Microscope,
  "building-2": Building2,
  "flask-conical": FlaskConical,
  bed: Bed,
  landmark: Landmark,
};

function IndustryCategoryGrid() {
  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="industry-list-heading">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-teal-700">Healthcare Distribution</p>
          <h2 id="industry-list-heading" className="section-title text-slate-950">
            Sectors We Support Across Maharashtra
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Delivering 100% genuine MNC pharmaceuticals, surgical consumables, and hospital supplies tailored to specific healthcare environments.
          </p>
        </div>

        <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.iconIdentifier];

            return (
              <div
                key={industry.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-teal-500/40 hover:shadow-md"
              >
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-teal-50/90 text-teal-700 border border-teal-100/80">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-slate-900 tracking-tight">
                    {industry.name}
                  </h3>

                  {industry.description ? (
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {industry.description}
                    </p>
                  ) : null}
                </div>

                {industry.highlights && industry.highlights.length > 0 ? (
                  <div className="mt-5 border-t border-slate-100 pt-3.5">
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">
                      Key Supply Lines
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {industry.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 size={13} className="text-teal-600 shrink-0" />
                          <span className="truncate">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default IndustryCategoryGrid;
