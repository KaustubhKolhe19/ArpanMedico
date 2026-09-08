import { whyChooseUs } from "../../data/whyChooseUs";
import SectionHeader from "../common/SectionHeader";

function WhyChooseSection() {
  return (
    <section className="bg-white section-pad" aria-labelledby="why-choose-heading">
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Why choose us"
            title="Built around reliable healthcare supply."
            titleId="why-choose-heading"
            description="Client-confirmed reasons to consider Arpan Medico for healthcare supply requirements."
          />
          <img
            src="/assets/why-choose-us-inventory.png"
            alt="Organized pharmacy inventory shelves with boxed healthcare supplies"
            className="mt-8 h-[260px] w-full max-w-[520px] rounded-2xl border border-slate-200 object-cover shadow-[0_6px_18px_rgb(15_23_42/0.05)] sm:h-[300px]"
            loading="lazy"
          />
        </div>
        <ol className="divide-y divide-slate-200 border-y border-slate-200">
          {whyChooseUs.map((item, index) => (
            <li key={item.id} className="flex items-baseline gap-5 py-3.5 transition-colors hover:bg-slate-50">
              <span className="w-6 shrink-0 text-[0.7rem] font-semibold tracking-[0.12em] text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium leading-6 text-slate-800">{item.name}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default WhyChooseSection;