import {
  Accessibility,
  BadgeCheck,
  Boxes,
  Headphones,
  Hospital,
  Pill,
  Scissors,
  ShieldCheck,
  Syringe,
  Tags,
  Truck,
  Zap,
} from "lucide-react";
import { specialties } from "../../data/specialties";

const iconMap: Record<string, typeof Headphones> = {
  headphones: Headphones,
  boxes: Boxes,
  zap: Zap,
  "badge-check": BadgeCheck,
  tags: Tags,
  truck: Truck,
  accessibility: Accessibility,
  scissors: Scissors,
  syringe: Syringe,
  pill: Pill,
  hospital: Hospital,
  "shield-check": ShieldCheck,
};

function SpecialtiesSection() {
  return (
    <section className="bg-white section-pad" aria-labelledby="specialties-heading">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-eyebrow text-teal-700">Our Specialities</span>
            <h2 id="specialties-heading" className="section-title mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Why Hospitals &amp; Pharmacies Trust Us
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Arpan Medico provides verified wholesale distributor capabilities tailored to meet urgent healthcare supply demands.
          </p>
        </div>

        {/* 6 Featured Specialty Cards Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item) => {
            const Icon = (item.iconIdentifier && iconMap[item.iconIdentifier]) || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group flex items-start gap-4 rounded-xl border border-slate-200/80 bg-slate-50/40 p-5 transition duration-200 hover:border-teal-500/40 hover:bg-white hover:shadow-lg"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-100/70 text-teal-800 transition duration-200 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-slate-950 group-hover:text-teal-800">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.description || "Verified business specialty of Arpan Medico serving hospitals and healthcare professionals."}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SpecialtiesSection;
