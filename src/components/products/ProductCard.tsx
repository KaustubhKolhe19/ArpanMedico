import { CheckCircle2, PackageCheck, Pill, Scissors, Stethoscope, Syringe } from "lucide-react";
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
    <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs transition duration-200 hover:border-teal-500/40 hover:shadow-xs">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex size-8.5 shrink-0 items-center justify-center rounded-lg bg-teal-50/90 text-teal-700 border border-teal-100/70">
          {renderItemIcon(item.category, item.name)}
        </div>
        <h3 className="text-xs font-semibold text-slate-800 truncate">
          {item.name}
        </h3>
      </div>
      <div className="flex items-center gap-1.5 shrink-0 rounded-full bg-slate-50 px-2.5 py-1 text-[0.65rem] font-medium text-slate-600 border border-slate-200/70">
        <CheckCircle2 size={11} className="text-teal-600 shrink-0" />
        <span>Verified</span>
      </div>
    </div>
  );
}

export default ProductCard;
