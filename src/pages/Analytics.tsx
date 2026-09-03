import { useState } from "react";
import { Helmet } from "react-helmet-async";
import AnalyticsFilters from "../components/analytics/AnalyticsFilters";
import AnalyticsHeader from "../components/analytics/AnalyticsHeader";
import AnalyticsKpiCards from "../components/analytics/AnalyticsKpiCards";
import CategoryPerformance from "../components/analytics/CategoryPerformance";
import EnquiryConversion from "../components/analytics/EnquiryConversion";
import IndustryDistribution from "../components/analytics/IndustryDistribution";
import OrdersChart from "../components/analytics/OrdersChart";
import RevenueChart from "../components/analytics/RevenueChart";
import { analyticsDemoData } from "../data/analyticsDemo";
import type { ProductCategoryId } from "../types";

function Analytics() {
  const [period, setPeriod] = useState("Last 6 Months");
  const [category, setCategory] = useState<"all" | ProductCategoryId>("all");
  const categoryData = category === "all"
    ? analyticsDemoData.categoryPerformance
    : analyticsDemoData.categoryPerformance.filter((item) => item.category.toLowerCase().replace(/ /g, "-").startsWith(category.replace(/-/g, " ").split(" ")[0]));

  return (
    <>
      <Helmet>
        <title>Business Analytics | Arpan Medico</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <AnalyticsHeader />
      <div className="bg-slate-50 py-8 sm:py-10 lg:py-12">
        <div className="site-container space-y-8">
          <AnalyticsFilters period={period} category={category} onPeriodChange={setPeriod} onCategoryChange={setCategory} />
          <AnalyticsKpiCards kpis={analyticsDemoData.kpis} columns={6} />
          <section className="grid min-w-0 gap-10 lg:grid-cols-2" aria-label="Monthly sample trends">
            <RevenueChart data={analyticsDemoData.monthlyMetrics} />
            <OrdersChart data={analyticsDemoData.monthlyMetrics} />
          </section>
          <section className="grid min-w-0 gap-10 lg:grid-cols-[1.1fr_0.9fr]" aria-label="Sample category and industry analysis">
            <CategoryPerformance data={categoryData.length > 0 ? categoryData : analyticsDemoData.categoryPerformance} />
            <IndustryDistribution data={analyticsDemoData.industryDistribution} />
          </section>
          <EnquiryConversion data={analyticsDemoData.enquiryConversion} />
          <p className="text-center text-xs font-semibold text-slate-500">{period} · Sample Data — For Preview Only</p>
        </div>
      </div>
    </>
  );
}

export default Analytics;
