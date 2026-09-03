import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { EnquiryMetric } from "../../types";

type EnquiryConversionProps = { data: readonly EnquiryMetric[] };

function EnquiryConversion({ data }: EnquiryConversionProps) {
  return <article className="border border-slate-200 bg-white p-5 sm:p-6" aria-labelledby="enquiry-conversion-title"><div className="mb-6"><h2 id="enquiry-conversion-title" className="text-lg font-extrabold text-slate-950">Enquiry Conversion</h2><p className="mt-1 text-sm text-slate-500">Enquiries → Orders · Sample data</p></div><div className="h-64" aria-label="Bar chart showing sample enquiries, converted orders, and pending unconverted enquiries"><ResponsiveContainer width="100%" height="100%"><BarChart data={data} margin={{ top: 5, right: 8, left: -18, bottom: 0 }}><CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="label" tick={{ fontSize: 11, fill: "#64748b" }} tickLine={false} axisLine={false} /><YAxis tick={{ fontSize: 12, fill: "#64748b" }} tickLine={false} axisLine={false} /><Tooltip formatter={(value: unknown) => [String(value ?? ""), "Sample count"]} contentStyle={{ border: "1px solid #cbd5e1", borderRadius: 6, fontSize: 12 }} /><Bar dataKey="value" fill="#0f766e" radius={[3, 3, 0, 0]} barSize={42} /></BarChart></ResponsiveContainer></div></article>;
}

export default EnquiryConversion;
