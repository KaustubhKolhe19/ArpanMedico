import { Box, FlaskConical, Package, Stethoscope } from "lucide-react";
import { business } from "../../data/business";
import { displayCategory } from "../../lib/display";

const categoryIcons = [Package, FlaskConical, Stethoscope, Box];

function BusinessCategories() {
  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="categories-heading">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end">
          <div>
            <p className="section-eyebrow text-teal-700">What we do</p>
            <h2 id="categories-heading" className="section-title text-slate-950">
              Business categories
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            The categories shown here are taken directly from the business information.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2">
          {business.categories.map((category, index) => {
            const Icon = categoryIcons[index];
            return (
              <li
                key={category}
                className="flex items-start gap-4 border-t border-slate-200 py-6 sm:px-7 sm:odd:pl-0 sm:even:border-l sm:even:border-slate-200"
              >
                <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-teal-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <Icon size={15} className="text-teal-700" aria-hidden="true" />
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                    {displayCategory(category)}
                  </h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default BusinessCategories;
