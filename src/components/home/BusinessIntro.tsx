import { ArrowRight, Award, CheckCircle2, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";

function BusinessIntro() {
  return (
    <section className="bg-slate-50 section-pad border-y border-slate-200/80">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800 border border-teal-200/60">
            <Award size={14} className="text-teal-600" />
            <span>Authorized B2B Healthcare Wholesale Partner</span>
          </div>
          <h2 className="section-title mt-3 text-slate-950">
            Surgical, Pharmaceutical &amp; Hospital Supply Distribution Hub
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Under the leadership of founder <strong className="text-slate-900">{business.owner}</strong>, Arpan Medico delivers guaranteed genuine MNC healthcare products, bulk prescription supplies, and critical care equipment to hospitals and pharmacies across Maharashtra.
          </p>
        </div>

        {/* Content Grid: Professional Image & Detailed Capability Cards */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Premium Image Card (8 Columns or 5 Columns) */}
          <div className="relative lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/medical_warehouse.jpg"
                  alt="Arpan Medico Wholesale Warehouse and Surgical Supply Center"
                  className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 rounded-xl border border-teal-200 bg-white p-3 shadow-lg text-slate-900">
              <ShieldCheck size={22} className="text-teal-600" />
              <div>
                <p className="text-xs font-bold text-slate-950">100% Genuine</p>
                <p className="text-[0.65rem] text-slate-500">MNC Sourced</p>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Highlights & Capability Cards (7 Columns) */}
          <div className="space-y-6 lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              
              {/* Card 1 */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:border-teal-500/40 hover:shadow-md">
                <div className="flex size-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-slate-950">Authorized MNC Distribution</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Direct bulk supply of top healthcare brands including Ethicon, Nipro, Polymed, BD, Romsons, and Healthium.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:border-teal-500/40 hover:shadow-md">
                <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Truck size={20} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-slate-950">Express Regional Delivery</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Same-day processing and rapid fulfillment for hospitals, clinics, and medical stores in Sangamner &amp; MH.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:border-teal-500/40 hover:shadow-md">
                <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-slate-950">Complete Hospital Consumables</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Comprehensive range of IV fluids, surgical sutures, catheters, syringes, dressings, and diagnostic devices.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:border-teal-500/40 hover:shadow-md">
                <div className="flex size-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <PackageCheck size={20} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-slate-950">Wholesale Bulk Pricing</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Transparent wholesale pricing structure optimized for healthcare institutions, practitioner clinics, and retailers.
                </p>
              </div>

            </div>

            {/* Business Meta Summary Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-6 text-xs text-slate-700">
                <div>
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400">Headquarters</span>
                  <span className="font-bold text-slate-900">{business.address.city}, {business.address.state}</span>
                </div>
                <div className="h-7 w-px bg-slate-200" />
                <div>
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400">Director</span>
                  <span className="font-bold text-slate-900">{business.owner}</span>
                </div>
                <div className="h-7 w-px bg-slate-200 hidden sm:block" />
                <div className="hidden sm:block">
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400">Products</span>
                  <span className="font-bold text-slate-900">500+ Surgical &amp; Pharma Lines</span>
                </div>
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-teal-800"
              >
                <span>Full Company Profile</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default BusinessIntro;