import { Bed, Building2, Cog, Hospital, Monitor, Stethoscope } from "lucide-react";
import { brandCategories, otherBrandsCategory, showcaseBrands } from "../../data/brands";
import BrandCard from "./BrandCard";

const relationshipSections = {
  "Super Stockist": {
    eyebrow: "SUPER STOCKIST",
    title: "Super Stockist Product Lines",
    description: "Medical and healthcare product lines supplied through Arpan Medico's super stockist relationships.",
  },
  "Dealer For": {
    eyebrow: "DEALER FOR",
    title: "Brands We Deal In",
    description: "Healthcare brands and product lines available through Arpan Medico.",
  },
  Additional: {
    eyebrow: "ADDITIONAL BRANDS",
    title: "Other Healthcare Brands & Companies",
    description: "Additional client-listed and existing healthcare brands and companies.",
  },
};

const hospitalProductLines = [
  { name: "Commode Chair", icon: Bed, image: "/assets/brands/commode-chair-product.jpg" },
  { name: "Hospital Beds", icon: Bed },
  { name: "Patient Monitors", icon: Monitor },
  { name: "Hospital Equipment", icon: Hospital },
  { name: "Hospital Machines", icon: Cog },
  { name: "Surgical Equipment", icon: Stethoscope },
  { name: "MNC Company Equipment / Products", icon: Building2 },
];

function BrandShowcase() {
  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="brand-showcase-heading">
      <div className="site-container">
        <h2 id="brand-showcase-heading" className="sr-only">Brands and product lines</h2>
        <div className="space-y-10 lg:space-y-12">
          {brandCategories.filter((category) => category !== "Product").map((category) => {
            const content = relationshipSections[category];
            const categoryBrands = showcaseBrands.filter((brand) => brand.category === category);

            return (
              <section key={category} aria-labelledby={`brand-category-${category.replace(/\s+/g, "-").toLowerCase()}`}>
                <div className="max-w-2xl">
                  <p className="section-eyebrow text-teal-700">{content.eyebrow}</p>
                  <h2
                    id={`brand-category-${category.replace(/\s+/g, "-").toLowerCase()}`}
                    className="section-title text-slate-950"
                  >
                    {content.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{content.description}</p>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
                  {categoryBrands.map((brand) => (
                    <li key={brand.id}>
                      <BrandCard brand={brand} />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {otherBrandsCategory ? (
          <p className="mt-8 border-t border-slate-200 pt-6">
            <span className="brand-other-badge">{otherBrandsCategory.name}</span>
          </p>
        ) : null}

        <section className="mt-10 border-t border-slate-200 pt-8 lg:mt-12" aria-labelledby="hospital-product-lines">
          <div className="max-w-2xl">
            <p className="section-eyebrow text-teal-700">PRODUCT LINE</p>
            <h2 id="hospital-product-lines" className="section-title text-slate-950">
              Hospital Equipment &amp; Product Lines
            </h2>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
            {hospitalProductLines.map(({ name, icon: Icon, image }) => (
              <li key={name} className="flex min-h-24 items-center gap-3 rounded-xl border border-slate-200/90 bg-white p-3 shadow-2xs transition duration-200 hover:border-teal-500/40">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-teal-100/80 bg-teal-50/90 text-teal-700">
                  {image ? (
                    <img src={image} alt={`${name} product image`} className="size-8 object-contain" loading="lazy" />
                  ) : (
                    <Icon size={20} aria-hidden="true" />
                  )}
                </span>
                <span className="min-w-0 text-xs font-semibold leading-5 text-slate-800">{name}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

export default BrandShowcase;
