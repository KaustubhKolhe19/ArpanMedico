import {
  ArrowUpRight,
  Bed,
  Building2,
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
          <p className="section-eyebrow text-teal-700">Arpan Medico</p>
          <h2 id="industry-list-heading" className="section-title text-slate-950">
            Industries We Serve
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-500">
            Supporting healthcare organizations with medical, surgical and hospital supply solutions.
          </p>
        </div>

        <ul className="mt-8 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.iconIdentifier];

            return (
              <li key={industry.id} className="h-full">
                <article className="industry-card">
                  <span className="industry-card-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <div className="industry-card-footer">
                    <h3 className="industry-card-title">{industry.name}</h3>
                    <span className="industry-card-arrow" aria-hidden="true">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default IndustryCategoryGrid;
