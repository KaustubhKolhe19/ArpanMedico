import {
  featuredShowcaseBrands,
  otherBrandsCategory,
  supportingShowcaseBrands,
} from "../../data/brands";
import { business } from "../../data/business";
import BrandCard from "./BrandCard";

function BrandShowcase() {
  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="brand-showcase-heading">
      <div className="site-container">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="section-eyebrow text-teal-700">Brands we work with</p>
            <h2 id="brand-showcase-heading" className="section-title text-slate-950">
              Healthcare brands supplied by {business.name}.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            The following brand information has been confirmed by the client.
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {featuredShowcaseBrands.map((brand) => (
            <li key={brand.id}>
              <BrandCard brand={brand} featured />
            </li>
          ))}
        </ul>

        <ul className="mt-4 grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {supportingShowcaseBrands.map((brand) => (
            <li key={brand.id}>
              <BrandCard brand={brand} />
            </li>
          ))}
        </ul>

        {otherBrandsCategory ? (
          <div className="mt-8 border-t border-slate-200 pt-6">
            <p className="brand-other-badge">{otherBrandsCategory.name}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default BrandShowcase;
