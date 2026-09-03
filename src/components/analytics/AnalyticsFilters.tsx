import { Filter } from "lucide-react";
import type { ProductCategoryId } from "../../types";

type AnalyticsFiltersProps = {
  period: string;
  category: "all" | ProductCategoryId;
  onPeriodChange: (period: string) => void;
  onCategoryChange: (category: "all" | ProductCategoryId) => void;
};

function AnalyticsFilters({ period, category, onPeriodChange, onCategoryChange }: AnalyticsFiltersProps) {
  return (
    <section className="flex flex-col gap-4 border-y border-slate-200 py-5 sm:flex-row sm:items-end sm:justify-between" aria-label="Analytics filters">
      <div className="flex items-center gap-2 text-sm font-bold text-slate-800"><Filter size={17} className="text-teal-700" aria-hidden="true" />Filter sample view</div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Period<select value={period} onChange={(event) => onPeriodChange(event.target.value)} className="min-h-10 min-w-44 rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold normal-case tracking-normal text-slate-800 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"><option>Last 6 Months</option><option>Last 12 Months</option><option>This Year</option></select></label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Category<select value={category} onChange={(event) => onCategoryChange(event.target.value as AnalyticsFiltersProps["category"])} className="min-h-10 min-w-56 rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold normal-case tracking-normal text-slate-800 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"><option value="all">All Categories</option><option value="medicines">Medicines</option><option value="surgical-products">Surgical Products</option><option value="medical-equipment-consumables">Medical Equipment &amp; Consumables</option><option value="healthcare-supplies">Healthcare Supplies</option></select></label>
      </div>
    </section>
  );
}

export default AnalyticsFilters;
