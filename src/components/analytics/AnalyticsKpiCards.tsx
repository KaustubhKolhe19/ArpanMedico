import { IndianRupee, Layers3, MessageCircle, Percent, Receipt, ShoppingBag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { AnalyticsKpi, AnalyticsKpiIcon } from "../../data/analyticsDemo";

const kpiIcons: Record<AnalyticsKpiIcon, LucideIcon> = {
  "indian-rupee": IndianRupee,
  "shopping-bag": ShoppingBag,
  "message-circle": MessageCircle,
  percent: Percent,
  receipt: Receipt,
  layers: Layers3,
};

type AnalyticsKpiCardsProps = {
  kpis: readonly AnalyticsKpi[];
  columns?: 4 | 6;
};

function AnalyticsKpiCards({ kpis, columns = 4 }: AnalyticsKpiCardsProps) {
  const gridClass =
    columns === 6
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div role="list" aria-label="Sample key figures" className={`${gridClass} border-y border-slate-200`}>
      {kpis.map((kpi) => {
        const Icon = kpiIcons[kpi.iconIdentifier];

        return (
          <article
            key={kpi.label}
            role="listitem"
            className={
              columns === 6
                ? "flex flex-col border-t border-slate-200 py-5 first:border-t-0 even:sm:border-l even:sm:border-slate-200 sm:px-6 sm:py-6 xl:border-t-0 xl:border-l xl:border-slate-200 xl:first:border-l-0 xl:first:pl-0"
                : "flex flex-col border-t border-slate-200 py-5 first:border-t-0 even:sm:border-l even:sm:border-slate-200 sm:px-6 sm:py-6 lg:border-t-0 lg:border-l lg:border-slate-200 lg:first:border-l-0 lg:first:pl-0"
            }
          >
            <Icon size={15} className="text-teal-700" aria-hidden="true" />
            <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{kpi.value}</p>
            <p className="mt-1 text-sm text-slate-500">{kpi.label}</p>
          </article>
        );
      })}
    </div>
  );
}

export default AnalyticsKpiCards;
