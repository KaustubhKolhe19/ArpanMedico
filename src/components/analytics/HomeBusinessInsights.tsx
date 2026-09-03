import SectionHeader from "../common/SectionHeader";
import AnalyticsKpiCards from "./AnalyticsKpiCards";
import CategoryPerformance from "./CategoryPerformance";
import DemoDataBadge from "./DemoDataBadge";
import RevenueChart from "./RevenueChart";
import { analyticsDemoData, homeKpis } from "../../data/analyticsDemo";

function HomeBusinessInsights() {
  return (
    <section
      id="business-insights"
      className="bg-slate-50 section-pad"
      aria-labelledby="business-insights-heading"
    >
      <div className="site-container">
        <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Sample metrics"
            title="Business Insights"
            titleId="business-insights-heading"
            description="An at-a-glance view of sample business performance metrics."
          />
          <DemoDataBadge />
        </div>
        <div className="mt-6 space-y-8">
          <AnalyticsKpiCards kpis={homeKpis} />
          <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
            <RevenueChart data={analyticsDemoData.monthlyMetrics} headingLevel="h3" />
            <CategoryPerformance data={analyticsDemoData.categoryPerformance} headingLevel="h3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBusinessInsights;
