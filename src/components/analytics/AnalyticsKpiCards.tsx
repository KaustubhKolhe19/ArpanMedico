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
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4";

  return (
    <div role="list" aria-label="Key figures" className={gridClass}>
      {kpis.map((kpi) => {
        const Icon = kpiIcons[kpi.iconIdentifier];

        return (
          <article
            key={kpi.label}
            role="listitem"
            className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-200 hover:border-teal-500/40 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{kpi.label}</span>
              <div className="flex size-9 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <Icon size={18} aria-hidden="true" />
              </div>
            </div>
            <p className="mt-4 text-3xl font-bold tracking-tight text-slate-950">{kpi.value}</p>
          </article>
        );
      })}
    </div>
  );
}

export default AnalyticsKpiCards;
