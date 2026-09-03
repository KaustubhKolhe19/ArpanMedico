import { productCategories } from "../../data/products";

function CategoryNavigation() {
  return (
    <nav className="sticky top-[3.75rem] z-30 border-b border-slate-200 bg-white" aria-label="Product categories">
      <div className="site-container">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 py-3 text-sm font-medium text-slate-600 sm:gap-x-7">
          {productCategories.map((category) => (
            <li key={category.id}>
              <a
                href={`#${category.id}`}
                className="inline-flex text-pretty transition hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default CategoryNavigation;
