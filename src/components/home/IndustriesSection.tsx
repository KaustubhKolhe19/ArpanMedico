import { ArrowRight, Building2, Hospital, Pill, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import { industries } from "../../data/industries";

const industryIcons: Record<string, typeof Hospital> = {
  hospitals: Hospital,
  clinics: Stethoscope,
  "medical-stores": Pill,
  "diagnostic-laboratories": Building2,
};

const industryDescriptions: Record<string, string> = {
  hospitals:
    "Supplying essential IV fluids, surgical consumables, and emergency pharmaceutical orders to multi-specialty hospitals with priority dispatch.",
  clinics:
    "Providing daily clinical disposables, diagnostic instruments, and routine care medical supplies for general practitioners and specialist clinics.",
  "medical-stores":
    "Bulk wholesale distribution of branded pharmaceutical inventory and healthcare products at competitive rates for retail medical stores.",
  "diagnostic-laboratories":
    "Stocking certified collection tubes, sterile gloves, diagnostic reagents, and laboratory consumables for clinical testing facilities.",
};

function IndustriesSection() {
  return (
    <section className="bg-slate-50/70 section-pad border-y border-slate-200/60" aria-labelledby="home-industries-heading">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-eyebrow text-teal-700">Client Sectors</span>
            <h2 id="home-industries-heading" className="section-title mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Industries &amp; Healthcare Clients We Serve
            </h2>
          </div>
          <Link to="/industries" className="btn-link shrink-0 text-sm font-semibold">
            View All Industries ({industries.length})
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Industry Sector Cards Grid with Unique Descriptions */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 4).map((industry) => {
            const Icon = industryIcons[industry.id] || Hospital;
            const description =
              industryDescriptions[industry.id] ||
              "Dedicated wholesale supply solutions tailored for healthcare facilities across Maharashtra.";

            return (
              <div
                key={industry.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition duration-200 group-hover:bg-teal-700 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-bold tracking-tight text-slate-950 group-hover:text-teal-800">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {description}
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

export default IndustriesSection;
