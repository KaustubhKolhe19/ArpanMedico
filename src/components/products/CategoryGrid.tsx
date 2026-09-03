import { business } from "../../data/business";
import { displayCategory } from "../../lib/display";
import { Link } from "react-router-dom";

function CategoryGrid() {
  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="category-grid-heading">
      <div className="site-container">
        <div className="max-w-2xl">
          <p className="section-eyebrow text-teal-700">Browse by category</p>
          <h2 id="category-grid-heading" className="section-title text-slate-950">
            Start with a category.
          </h2>
          <p className="body-copy mt-4">
            Product catalogue details are not currently listed as verified information. Contact {business.name} with a specific requirement.
          </p>
        </div>
        <ol className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {business.categories.map((category, index) => (
            <li key={category} className="flex flex-wrap items-baseline justify-between gap-3 py-5">
              <span className="flex items-baseline gap-5">
                <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-teal-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">{displayCategory(category)}</h3>
              </span>
              <Link to="/contact" className="btn-link" aria-label={`Enquire about the ${displayCategory(category)} category`}>
                Make an enquiry
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default CategoryGrid;
