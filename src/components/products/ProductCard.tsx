import { ArrowUpRight, CheckCircle2, MessageCircle, PackageCheck, Pill, Scissors, Stethoscope, Syringe } from "lucide-react";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import type { ProductItem } from "../../types";

type ProductCardProps = {
  item: ProductItem;
};

function renderItemIcon(category: ProductItem["category"], name: string) {
  const isSyringeOrIv = name.toLowerCase().includes("syringe") || name.toLowerCase().includes("iv");
  if (isSyringeOrIv) {
    return <Syringe size={16} />;
  }
  switch (category) {
    case "medicines":
      return <Pill size={16} />;
    case "surgical-products":
      return <Scissors size={16} />;
    case "instruments":
      return <Stethoscope size={16} />;
    default:
      return <PackageCheck size={16} />;
  }
}

function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs transition duration-200 hover:border-teal-500/40 hover:shadow-xs">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-8.5 shrink-0 items-center justify-center rounded-lg border border-teal-100/70 bg-teal-50/90 text-teal-700">
            {item.image ? (
              <img
                src={item.image}
                alt={`${item.name} product image`}
                className="size-7 object-contain"
                loading="lazy"
              />
            ) : (
              renderItemIcon(item.category, item.name)
            )}
          </div>
          <h3 className="truncate text-xs font-semibold text-slate-800">{item.name}</h3>
        </div>
        {item.verificationStatus === "verified" ? (
          <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200/70 bg-slate-50 px-2.5 py-1 text-[0.65rem] font-medium text-slate-600">
            <CheckCircle2 size={11} className="shrink-0 text-teal-600" />
            <span>Verified</span>
          </div>
        ) : null}
      </div>
      {item.name === "Commode Chair" ? (
        <a
          href={createWhatsAppUrl(
            "Hello Arpan Medico, I would like to enquire about Commode Chair. Please share the available options, product details, availability, and pricing.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire about Commode Chair on WhatsApp"
          className="btn-link mt-3 inline-flex items-center gap-1.5 text-xs font-semibold"
        >
          <MessageCircle size={14} aria-hidden="true" />
          Enquire about Commode Chair
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

export default ProductCard;
