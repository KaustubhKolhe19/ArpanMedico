import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { otherBrandsCategory, showcaseBrands } from "../../data/brands";
import { business } from "../../data/business";
import BrandLogo from "../brands/BrandLogo";

function HomeBrandsSection() {
  return (
    <section className="bg-white section-pad" aria-labelledby="home-brands-heading">
      <div className="site-container">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="section-eyebrow text-teal-700">Brands available</p>
            <h2 id="home-brands-heading" className="section-title text-slate-950">
              Healthcare brands associated with {business.name}.
            </h2>
          </div>
          <Link to="/brands" className="btn-link shrink-0">
            View all brands
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {showcaseBrands.map((brand) => (
            <li key={brand.id} className="home-brand-tile">
              <BrandLogo brand={brand} size="sm" showName />
            </li>
          ))}
        </ul>

        {otherBrandsCategory ? (
          <p className="mt-5 text-sm text-slate-500">{otherBrandsCategory.name}</p>
        ) : null}
      </div>
    </section>
  );
}

export default HomeBrandsSection;
