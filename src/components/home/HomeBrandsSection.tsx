import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { showcaseBrands } from "../../data/brands";
import BrandLogo from "../brands/BrandLogo";

const homeBrandIds = ["nipro", "polymed", "johnson-johnson-ethicon", "bd", "romsons", "healthium", "nulife"];

function HomeBrandsSection() {
  const featuredBrands = homeBrandIds
    .map((id) => showcaseBrands.find((brand) => brand.id === id))
    .filter((brand) => brand !== undefined);

  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="home-brands-heading">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 border border-teal-200/60">
              <Award size={14} className="text-teal-700" />
              <span>BRANDS &amp; PRODUCT LINES</span>
            </div>
            <h2 id="home-brands-heading" className="section-title mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Healthcare Brands We Supply
            </h2>
          </div>
          <Link to="/brands" className="btn-link shrink-0 text-sm font-semibold">
            View All Brands
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
          Arpan Medico works with a wide range of healthcare brands and product lines across medical, surgical and hospital requirements.
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-7">
          {featuredBrands.map((brand) => (
            <li
              key={brand.id}
              className="flex min-h-24 min-w-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white p-3 transition duration-200 hover:border-teal-500/40 hover:shadow-md sm:min-h-28 sm:p-4"
            >
              <BrandLogo brand={brand} size="sm" showName />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default HomeBrandsSection;
