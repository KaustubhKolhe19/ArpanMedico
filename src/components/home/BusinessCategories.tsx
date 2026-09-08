import { FlaskConical, Package, Stethoscope } from "lucide-react";
import { business } from "../../data/business";
import { displayCategory } from "../../lib/display";

const categoryIcons = [Package, FlaskConical, Stethoscope];

function BusinessCategories() {
  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="categories-heading">
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
        <div>
          <p className="section-eyebrow text-teal-700">What we do</p>
          <h2 id="categories-heading" className="section-title text-slate-950">
            Business categories
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
            <span className="block font-semibold text-slate-700">Wholesale Medical &amp; Surgical Supply</span>
            Medicines, surgical products and instruments supplied for hospitals, clinics, pharmacies and healthcare organizations.
          </p>
          <ul className="mt-8 grid border-y border-slate-200">
            {business.categories.map((category, index) => {
              const Icon = categoryIcons[index];
              return (
                <li key={category} className="flex items-center gap-4 border-b border-slate-200 py-4 last:border-b-0">
                  <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-teal-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon size={17} className="text-teal-700" aria-hidden="true" />
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">{displayCategory(category)}</h3>
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1561328165-f0b762a9508e?auto=format&fit=crop&w=1200&q=85"
          alt="Medical and surgical supplies arranged in a professional healthcare setting"
          className="h-[260px] w-full max-w-[500px] justify-self-start rounded-2xl border border-slate-200 object-cover shadow-[0_6px_18px_rgb(15_23_42/0.05)] sm:h-[320px] lg:justify-self-end"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}

export default BusinessCategories;