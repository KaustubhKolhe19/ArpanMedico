import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { EnquiryMetric } from "../../types";

type EnquiryConversionProps = { data: readonly EnquiryMetric[] };

function EnquiryConversion({ data }: EnquiryConversionProps) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm" aria-labelledby="enquiry-conversion-title">
      <div className="mb-6">
        <h2 id="enquiry-conversion-title" className="text-lg font-bold tracking-tight text-slate-950">
          Enquiry Conversion Analysis
        </h2>
        <p className="mt-1 text-xs text-slate-500">Enquiries received vs Converted distribution orders</p>
      </div>
      <div className="h-64" aria-label="Bar chart showing enquiries, converted orders, and pending enquiries">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 8, left: -18, bottom: 0 }}>
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#64748b" }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 12, fill: "#64748b" }} tickLine={false} axisLine={false} />
            <Tooltip
              formatter={(value: unknown) => [String(value ?? ""), "Count"]}
              contentStyle={{ border: "1px solid #cbd5e1", borderRadius: 8, fontSize: 12 }}
            />
            <Bar dataKey="value" fill="#0f766e" radius={[4, 4, 0, 0]} barSize={42} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}

export default EnquiryConversion;
