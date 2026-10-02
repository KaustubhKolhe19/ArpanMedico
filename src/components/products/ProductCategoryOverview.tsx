import { ArrowDownRight } from "lucide-react";
import { productCategories } from "../../data/products";

function ProductCategoryOverview() {
  return (
    <section
      className="border-b border-slate-200 bg-slate-50 py-12 md:py-16 xl:py-20"
      aria-labelledby="product-category-overview-heading"
    >
      <div className="site-container">
        <div className="mb-7 max-w-2xl md:mb-9">
          <p className="section-eyebrow text-teal-700">Product range</p>
          <h2 id="product-category-overview-heading" className="section-title mt-2 text-slate-950">
            Explore our product categories
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Browse medical, surgical and hospital products by category.
          </p>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {productCategories.map((category) => (
            <article
              key={category.id}
              className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-teal-700/40"
            >
              <img
                src={category.image}
                alt={`${category.name} supplies and products`}
                width={800}
                height={500}
                className="aspect-[8/5] w-full bg-slate-100 object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
                  {category.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>
                <a
                  href={`#${category.id}`}
                  className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-teal-800 transition-colors hover:text-teal-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                >
                  Explore Products
                  <ArrowDownRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategoryOverview;
