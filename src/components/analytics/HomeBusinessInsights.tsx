import SectionHeader from "../common/SectionHeader";
import AnalyticsKpiCards from "./AnalyticsKpiCards";
import CategoryPerformance from "./CategoryPerformance";
import RevenueChart from "./RevenueChart";
import { analyticsDemoData, homeKpis } from "../../data/analyticsDemo";

function HomeBusinessInsights() {
  return (
    <section
      id="business-insights"
      className="bg-slate-50/70 section-pad border-t border-slate-200/60"
      aria-labelledby="business-insights-heading"
    >
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Business Performance"
            title="Wholesale Supply &amp; Distribution Metrics"
            titleId="business-insights-heading"
            description="Operational metrics showing monthly revenue growth, total orders, and product category demand."
          />
        </div>

        {/* Analytics Content */}
        <div className="mt-8 space-y-8">
          <AnalyticsKpiCards kpis={homeKpis} />
          <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <RevenueChart data={analyticsDemoData.monthlyMetrics} headingLevel="h3" />
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <CategoryPerformance data={analyticsDemoData.categoryPerformance} headingLevel="h3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBusinessInsights;
