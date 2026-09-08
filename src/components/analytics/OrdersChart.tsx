import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { MonthlyMetric } from "../../types";

type OrdersChartProps = { data: readonly MonthlyMetric[] };

function OrdersChart({ data }: OrdersChartProps) {
  return (
    <article className="min-w-0" aria-labelledby="orders-chart-title">
      <div className="mb-6">
        <h2 id="orders-chart-title" className="text-lg font-bold tracking-tight text-slate-950">
          Monthly Order Volume
        </h2>
        <p className="mt-1 text-xs text-slate-500">Order count from April to September</p>
      </div>
      <div className="h-64 sm:h-72" aria-label="Bar chart showing monthly orders from April to September">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 8, left: -18, bottom: 0 }}>
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 12, fill: "#64748b" }} tickLine={false} axisLine={false} />
            <Tooltip
              formatter={(value: unknown) => [String(value ?? ""), "Orders"]}
              contentStyle={{ border: "1px solid #cbd5e1", borderRadius: 8, fontSize: 12 }}
            />
            <Bar dataKey="orders" fill="#0f766e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}

export default OrdersChart;
