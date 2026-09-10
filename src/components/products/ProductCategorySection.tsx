import type { ProductCategory } from "../../types";
import ProductCard from "./ProductCard";

type ProductCategorySectionProps = {
  category: ProductCategory;
  index: number;
};

function ProductCategorySection({ category, index }: ProductCategorySectionProps) {
  return (
    <section
      id={category.id}
      className={`scroll-mt-24 section-pad border-b border-slate-200/80 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="site-container">
        {/* Simple Clean Header */}
        <div className="border-b border-slate-200 pb-4">
          <p className="section-eyebrow text-teal-700">Category {String(index + 1).padStart(2, "0")}</p>
          <h2 id={`${category.id}-heading`} className="section-title mt-1 text-slate-950">
            {category.name}
          </h2>
        </div>

        {/* Clean Product Grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategorySection;
