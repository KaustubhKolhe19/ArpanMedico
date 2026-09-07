import { business } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import type { ProductCategory } from "../../types";
import ProductCard from "./ProductCard";

const categoryLabels: Record<ProductCategory["id"], string> = {
  medicines: "Confirmed medicine category items.",
  "surgical-products": "Confirmed surgical product category items.",
  instruments: "Confirmed instrument and related healthcare supply items.",
};

type ProductCategorySectionProps = {
  category: ProductCategory;
  index: number;
};

function ProductCategorySection({ category, index }: ProductCategorySectionProps) {
  const enquiryUrl = createWhatsAppUrl(
    `Hello ${business.name}, I have a specific requirement and would like to enquire.`,
  );

  return (
    <section
      id={category.id}
      className={`scroll-mt-24 section-pad ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="site-container">
        <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
          <div className="min-w-0">
            <p className="section-eyebrow text-teal-700">Category {String(index + 1).padStart(2, "0")}</p>
            <h2 id={`${category.id}-heading`} className="section-title text-pretty text-slate-950">
              {category.name}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">{categoryLabels[category.id]}</p>
        </div>

        <ul className="mt-1 grid sm:grid-cols-2 sm:gap-x-10">
          {category.items.map((item) => (
            <li key={item.id} className="border-t border-slate-200">
              <ProductCard item={item} />
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">Have a specific requirement?</p>
          <a href={enquiryUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductCategorySection;
