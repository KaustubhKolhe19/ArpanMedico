import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ANALYTICS_ACCENT_DARK, formatLakhs, type CategoryMetric } from "../../data/analyticsDemo";

type HeadingLevel = "h2" | "h3";

type CategoryPerformanceProps = {
  data: readonly CategoryMetric[];
  headingLevel?: HeadingLevel;
};

type TooltipEntry = {
  payload?: CategoryMetric;
};

type ChartTooltipProps = {
  active?: boolean;
  payload?: TooltipEntry[];
};

type AxisTickProps = {
  x?: number;
  y?: number;
  payload?: { value: string };
};

function wrapAxisLabel(label: string, maxChars: number): string[] {
  if (label.length <= maxChars) {
    return [label];
  }

  const words = label.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines;
}

function CategoryTick({ x = 0, y = 0, payload }: AxisTickProps) {
  const lines = wrapAxisLabel(payload?.value ?? "", 18);
  const startDy = lines.length > 1 ? -((lines.length - 1) * 7) : 4;

  return (
    <text x={x} y={y} textAnchor="end" fill="#334155" fontSize={11} fontWeight={600}>
      {lines.map((line, index) => (
        <tspan key={line} x={x - 8} dy={index === 0 ? startDy : 14}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

function CategoryTooltip({ active, payload }: ChartTooltipProps) {
  if (!active || !payload?.[0]?.payload) {
    return null;
  }

  const point = payload[0].payload;

  return (
    <div className="border border-slate-200 bg-white px-3 py-2 text-xs shadow-md rounded-lg">
      <p className="font-bold text-slate-950">{point.category}</p>
      <p className="mt-1 text-slate-600">Revenue: {formatLakhs(point.revenue)}</p>
    </div>
  );
}

function CategoryPerformance({ data, headingLevel = "h2" }: CategoryPerformanceProps) {
  const Heading = headingLevel;
  const chartData = [...data];

  return (
    <article className="min-w-0" aria-labelledby="category-performance-title">
      <Heading id="category-performance-title" className="text-lg font-bold tracking-tight text-slate-950">
        Revenue by Category
      </Heading>
      <div
        className="mt-5 h-60 w-full min-w-0 overflow-hidden sm:h-72"
        aria-label="Horizontal bar chart of revenue by business category, in lakhs of rupees"
      >
        <ResponsiveContainer width="100%" height="100%" debounce={50}>
          <BarChart data={chartData} layout="vertical" margin={{ top: 4, right: 16, left: 4, bottom: 0 }}>
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" horizontal={false} />
            <XAxis
              type="number"
              tick={{ fontSize: 12, fill: "#64748b" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value: number) => formatLakhs(value)}
            />
            <YAxis
              type="category"
              dataKey="category"
              width={128}
              interval={0}
              tick={<CategoryTick />}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CategoryTooltip />} cursor={{ fill: "#f8fafc" }} />
            <Bar
              dataKey="revenue"
              name="Revenue"
              fill={ANALYTICS_ACCENT_DARK}
              barSize={18}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <ul className="sr-only">
        {data.map((point) => (
          <li key={point.category}>
            {point.category}: {formatLakhs(point.revenue)} revenue
          </li>
        ))}
      </ul>
    </article>
  );
}

export default CategoryPerformance;
