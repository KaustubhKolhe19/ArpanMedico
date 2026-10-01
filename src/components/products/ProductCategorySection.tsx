import {
  Accessibility,
  ArrowUpRight,
  Bed,
  Building2,
  Cog,
  Hospital,
  MessageCircle,
  Monitor,
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
  bed: Bed,
  monitor: Monitor,
  hospital: Hospital,
  cog: Cog,
  stethoscope: Stethoscope,
  "building-2": Building2,
  accessibility: Accessibility,
};

const enquiryCategoryIds = new Set([
  "hospital-beds",
  "patient-monitors",
  "hospital-equipment",
  "hospital-machines",
  "surgical-equipment",
  "mnc-company-equipment-products",
]);

type ProductCategorySectionProps = {
  category: ProductCategory;
  index: number;
};

function ProductCategorySection({ category, index }: ProductCategorySectionProps) {
  const Icon = categoryIcons[category.iconIdentifier ?? ""] ?? Stethoscope;

  return (
    <section
      id={category.id}
      className={`scroll-mt-24 section-pad border-b border-slate-200/80 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="site-container">
        <div className="flex flex-col gap-5 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-teal-100/80 bg-teal-50/90 text-teal-700">
              <Icon size={22} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="section-eyebrow text-teal-700">Category {String(index + 1).padStart(2, "0")}</p>
              <h2 id={`${category.id}-heading`} className="section-title mt-1 text-slate-950">
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
          {category.image ? (
            <img
              src={category.image}
              alt={`${category.name} product category`}
              className="aspect-[16/9] w-full rounded-xl border border-slate-200 object-cover sm:w-48"
              loading="lazy"
            />
          ) : null}
        </div>

        {category.items.length > 0 ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
