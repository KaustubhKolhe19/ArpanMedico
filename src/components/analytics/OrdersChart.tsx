import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { MonthlyMetric } from "../../types";

type OrdersChartProps = { data: readonly MonthlyMetric[] };

function OrdersChart({ data }: OrdersChartProps) {
  return <article className="border border-slate-200 bg-white p-5 sm:p-6" aria-labelledby="orders-chart-title"><div className="mb-6"><h2 id="orders-chart-title" className="text-lg font-extrabold text-slate-950">Monthly Orders</h2><p className="mt-1 text-sm text-slate-500">Sample order volume</p></div><div className="h-72" aria-label="Bar chart showing sample monthly orders from April to September"><ResponsiveContainer width="100%" height="100%"><BarChart data={data} margin={{ top: 5, right: 8, left: -18, bottom: 0 }}><CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} tickLine={false} axisLine={false} /><YAxis tick={{ fontSize: 12, fill: "#64748b" }} tickLine={false} axisLine={false} /><Tooltip formatter={(value: unknown) => [String(value ?? ""), "Sample orders"]} contentStyle={{ border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 12 }} /><Bar dataKey="orders" fill="#0f766e" radius={[3, 3, 0, 0]} /></BarChart></ResponsiveContainer></div></article>;
}

export default OrdersChart;
