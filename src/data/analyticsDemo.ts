export type AnalyticsKpiIcon =
  | "indian-rupee"
  | "shopping-bag"
  | "message-circle"
  | "percent"
  | "receipt"
  | "layers";

export type AnalyticsKpi = {
  label: string;
  value: string;
  iconIdentifier: AnalyticsKpiIcon;
};

export type MonthlyMetric = {
  month: string;
  monthShort: string;
  revenue: number;
  orders: number;
};

export type CategoryMetric = {
  category: string;
  shortLabel: string;
  revenue: number;
};

export type IndustryMetric = {
  industry: string;
  percentage: number;
};

export type EnquiryMetric = {
  label: string;
  value: number;
};

export type AnalyticsDemoData = {
  kpis: readonly AnalyticsKpi[];
  monthlyMetrics: readonly MonthlyMetric[];
  categoryPerformance: readonly CategoryMetric[];
  industryDistribution: readonly IndustryMetric[];
  enquiryConversion: readonly EnquiryMetric[];
};

export const DEMO_DATA_LABEL = "DEMO DATA";
export const DEMO_DATA_NOTICE =
  "Sample figures shown for demonstration. Actual business data will be updated later.";

export const ANALYTICS_ACCENT = "#0f766e";
export const ANALYTICS_ACCENT_DARK = "#115e59";

export function formatLakhs(value: number): string {
  return `₹${value.toFixed(1)}L`;
}

export const homeKpis: readonly AnalyticsKpi[] = [
  { label: "Total Revenue", value: "₹5.48Cr", iconIdentifier: "indian-rupee" },
  { label: "Total Orders", value: "428", iconIdentifier: "shopping-bag" },
  { label: "Total Enquiries", value: "672", iconIdentifier: "message-circle" },
  { label: "Conversion Rate", value: "63.7%", iconIdentifier: "percent" },
];

const additionalKpis: readonly AnalyticsKpi[] = [
  { label: "Average Order Value", value: "₹1,28,037", iconIdentifier: "receipt" },
  { label: "Active Business Categories", value: "3", iconIdentifier: "layers" },
];

export const analyticsDemoData: AnalyticsDemoData = {
  kpis: [...homeKpis, ...additionalKpis],
  monthlyMetrics: [
    { month: "April", monthShort: "Apr", revenue: 82, orders: 54 },
    { month: "May", monthShort: "May", revenue: 86, orders: 61 },
    { month: "June", monthShort: "Jun", revenue: 90, orders: 66 },
    { month: "July", monthShort: "Jul", revenue: 93, orders: 72 },
    { month: "August", monthShort: "Aug", revenue: 97, orders: 78 },
    { month: "September", monthShort: "Sep", revenue: 100, orders: 97 },
  ],
  categoryPerformance: [
    { category: "Medicines", shortLabel: "Medicines", revenue: 185 },
    { category: "Surgical", shortLabel: "Surgical", revenue: 160 },
    { category: "Instruments", shortLabel: "Instruments", revenue: 203 },
  ],
  industryDistribution: [
    { industry: "Hospitals", percentage: 32 },
    { industry: "Clinics", percentage: 18 },
    { industry: "Medical Stores", percentage: 17 },
    { industry: "Diagnostic Laboratories", percentage: 9 },
    { industry: "Corporate Healthcare", percentage: 10 },
    { industry: "Pharmaceutical Companies", percentage: 6 },
    { industry: "Nursing Homes", percentage: 4 },
    { industry: "Healthcare Institutions", percentage: 4 },
  ],
  enquiryConversion: [
    { label: "Enquiries", value: 672 },
    { label: "Converted Orders", value: 428 },
    { label: "Pending / Unconverted", value: 244 },
  ],
};
