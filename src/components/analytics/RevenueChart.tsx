import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ANALYTICS_ACCENT, formatLakhs, type MonthlyMetric } from "../../data/analyticsDemo";

type HeadingLevel = "h2" | "h3";

type RevenueChartProps = {
  data: readonly MonthlyMetric[];
  headingLevel?: HeadingLevel;
};

type TooltipEntry = {
  payload?: MonthlyMetric;
};

type ChartTooltipProps = {
  active?: boolean;
  payload?: TooltipEntry[];
};

function RevenueTooltip({ active, payload }: ChartTooltipProps) {
  if (!active || !payload?.[0]?.payload) {
    return null;
  }

  const point = payload[0].payload;

  return (
    <div className="border border-slate-200 bg-white px-3 py-2 text-xs">
      <p className="font-bold text-slate-950">{point.month}</p>
      <p className="mt-1 text-slate-600">Sample revenue: {formatLakhs(point.revenue)}</p>
    </div>
  );
}

function RevenueChart({ data, headingLevel = "h2" }: RevenueChartProps) {
  const Heading = headingLevel;
  const chartData = [...data];

  return (
    <article className="min-w-0" aria-labelledby="revenue-chart-title">
      <Heading id="revenue-chart-title" className="text-lg font-semibold tracking-tight text-slate-950">
        Monthly Revenue
      </Heading>
      <div
        className="mt-5 h-56 w-full min-w-0 overflow-hidden sm:h-64"
        aria-label="Line chart of sample monthly revenue from April to September, in lakhs of rupees"
      >
        <ResponsiveContainer width="100%" height="100%" debounce={50}>
          <LineChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="monthShort"
              tick={{ fontSize: 12, fill: "#64748b" }}
              tickLine={false}
              axisLine={false}
              interval={0}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#64748b" }}
              tickLine={false}
              axisLine={false}
              width={56}
              tickFormatter={(value: number) => formatLakhs(value)}
              domain={["auto", "auto"]}
            />
            <Tooltip content={<RevenueTooltip />} cursor={{ stroke: "#cbd5e1" }} />
            <Line
              type="monotone"
              dataKey="revenue"
              name="Sample revenue"
              stroke={ANALYTICS_ACCENT}
              strokeWidth={2.5}
              dot={{ r: 4, fill: ANALYTICS_ACCENT, strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 5, fill: ANALYTICS_ACCENT }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <ul className="sr-only">
        {data.map((point) => (
          <li key={point.month}>
            {point.month}: {formatLakhs(point.revenue)} sample revenue
          </li>
        ))}
      </ul>
    </article>
  );
}

export default RevenueChart;
