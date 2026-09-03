import { ArrowUpRight } from "lucide-react";
import { business } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import type { ProductItem } from "../../types";

type ProductCardProps = {
  item: ProductItem;
  image?: string;
};

function ProductCard({ item, image }: ProductCardProps) {
  const enquiryUrl = createWhatsAppUrl(
    `Hello ${business.name}, I would like to enquire about ${item.name}.`,
  );

  return (
    <article className="flex items-start justify-between gap-4 py-3">
      <div className="min-w-0">
        {image ? <img src={image} alt="" className="mb-2 h-10 w-auto object-contain" /> : null}
        <h3 className="text-sm font-medium leading-6 text-pretty text-slate-900">{item.name}</h3>
      </div>
      <a
        href={enquiryUrl}
        target="_blank"
        rel="noreferrer"
        className="btn-link mt-0.5 shrink-0"
        aria-label={`Enquire about ${item.name}`}
      >
        Enquire
        <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
}

export default ProductCard;
