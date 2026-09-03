import { whyChooseUs } from "../../data/whyChooseUs";
import SectionHeader from "../common/SectionHeader";

function WhyChooseSection() {
  return (
    <section className="bg-white section-pad" aria-labelledby="why-choose-heading">
      <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
        <SectionHeader
          eyebrow="Why choose us"
          title="Built around reliable healthcare supply."
          titleId="why-choose-heading"
          description="Client-confirmed reasons to consider Arpan Medico for healthcare supply requirements."
        />
        <ol className="divide-y divide-slate-200 border-y border-slate-200">
          {whyChooseUs.map((item, index) => (
            <li key={item.id} className="flex items-baseline gap-4 py-3">
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
