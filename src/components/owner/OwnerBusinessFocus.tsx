import { business } from "../../data/business";
import { owner } from "../../data/owner";

function OwnerBusinessFocus() {
  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="owner-focus-heading">
      <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
        <div>
          <p className="section-eyebrow text-teal-700">Business focus</p>
          <h2 id="owner-focus-heading" className="section-title text-slate-950">
            Connected to {business.name}.
          </h2>
          <p className="body-copy mt-3">{owner.businessFocus}</p>
        </div>
        <ol className="divide-y divide-slate-200 border-y border-slate-200">
          {owner.focusAreas.map((label, index) => (
            <li key={label} className="flex items-baseline gap-5 py-4">
              <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold tracking-tight text-slate-950 sm:text-lg">{label}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default OwnerBusinessFocus;
