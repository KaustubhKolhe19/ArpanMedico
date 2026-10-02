import {
  ArrowUpRight,
  Hospital,
  MessageCircle,
  Pill,
  Scissors,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProductCategory } from "../../types";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import ProductCard from "./ProductCard";

const categoryIcons: Record<string, LucideIcon> = {
  pill: Pill,
  scissors: Scissors,
  hospital: Hospital,
  stethoscope: Stethoscope,
};

const enquiryCategoryIds = new Set(["surgical-products", "hospital-supplies"]);

type ProductCategorySectionProps = {
  category: ProductCategory;
  index: number;
};

function ProductCategorySection({ category, index }: ProductCategorySectionProps) {
  const Icon = categoryIcons[category.iconIdentifier ?? ""] ?? Stethoscope;

  return (
    <section
      id={category.id}
      className={`scroll-mt-24 border-b border-slate-200/80 py-12 md:py-16 xl:py-20 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="site-container">
        <div className="flex flex-col gap-5 border-b border-slate-200 pb-5 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex min-w-0 items-start gap-3 sm:gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-teal-100/80 bg-teal-50/90 text-teal-700 sm:size-11">
              <Icon size={22} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="section-eyebrow text-teal-700">Category {String(index + 1).padStart(2, "0")}</p>
              <h2 id={`${category.id}-heading`} className="section-title mt-1 text-balance text-slate-950">
                {category.name}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{category.description}</p>
              {category.linkTo && category.linkLabel ? (
                <Link to={category.linkTo} className="btn-link mt-3 inline-flex text-sm font-semibold">
                  {category.linkLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              ) : null}
              {enquiryCategoryIds.has(category.id) ? (
                <a
                  href={createWhatsAppUrl(
                    `Hello Arpan Medico, I would like to enquire about ${category.name}. Please share the available options, product details, availability, and pricing.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${category.name} on WhatsApp`}
                  className="btn-link mt-3 inline-flex items-center gap-1.5 text-sm font-semibold sm:ml-4"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  Enquire about {category.name}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {category.items.length > 0 ? (
        <div className="mt-5 grid auto-rows-fr gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {category.items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        ) : null}
      </div>
    </section>
  );
}

export default ProductCategorySection;
