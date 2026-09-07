import { business } from "../../data/business";
import { displayCategory } from "../../lib/display";

function BusinessOverview() {
  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="overview-heading">
      <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <p className="section-eyebrow text-teal-700">Business overview</p>
          <h2 id="overview-heading" className="section-title text-slate-950">
            Three categories, clearly represented.
          </h2>
          <p className="body-copy mt-3">The following categories are the ones identified for {business.name}.</p>
        </div>
        <ol className="divide-y divide-slate-200 border-y border-slate-200">
          {business.categories.map((category, index) => (
            <li key={category} className="flex items-baseline gap-5 py-3.5">
              <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-semibold tracking-tight text-slate-950 sm:text-lg">{displayCategory(category)}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default BusinessOverview;
