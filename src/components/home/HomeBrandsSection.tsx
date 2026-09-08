import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { otherBrandsCategory, showcaseBrands } from "../../data/brands";
import { business } from "../../data/business";
import BrandLogo from "../brands/BrandLogo";

function HomeBrandsSection() {
  return (
    <section className="bg-white section-pad" aria-labelledby="home-brands-heading">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 border border-teal-200/60">
              <Award size={14} className="text-teal-700" />
              <span>Partner Network</span>
            </div>
            <h2 id="home-brands-heading" className="section-title mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Authorized Healthcare &amp; Surgical Brands
            </h2>
          </div>
          <Link to="/brands" className="btn-link shrink-0 text-sm font-semibold">
            View All Partner Brands ({showcaseBrands.length})
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        {/* Brand Grid */}
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {showcaseBrands.map((brand) => (
            <li
              key={brand.id}
              className="flex min-h-[7rem] items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/40 p-4 transition duration-200 hover:border-teal-500/40 hover:bg-white hover:shadow-lg"
            >
              <BrandLogo brand={brand} size="sm" showName />
            </li>
          ))}
        </ul>

        {otherBrandsCategory ? (
          <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200/60 px-5 py-3 text-xs font-medium text-slate-600">
            <span>And other leading MNC healthcare brands supplied by {business.name}.</span>
            <Link to="/contact" className="text-teal-700 font-semibold hover:underline">
              Request Specific Brand →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default HomeBrandsSection;
