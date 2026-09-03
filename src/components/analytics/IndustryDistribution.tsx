import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { IndustryMetric } from "../../types";

type IndustryDistributionProps = { data: readonly IndustryMetric[] };
const colors = ["#0f766e", "#155e75", "#0e7490", "#0891b2", "#14b8a6", "#64748b", "#94a3b8", "#cbd5e1"];

function IndustryDistribution({ data }: IndustryDistributionProps) {
  return (
    <article className="min-w-0" aria-labelledby="industry-distribution-title">
      <div className="mb-3">
        <h2 id="industry-distribution-title" className="text-lg font-bold tracking-tight text-slate-950">
          Orders by Industry Sector
        </h2>
        <p className="mt-1 text-xs text-slate-500">Distribution across healthcare sectors</p>
      </div>
      <div className="grid items-center gap-4 sm:grid-cols-[1fr_1.1fr]">
        <div className="h-64" aria-label="Pie chart showing order distribution by industry">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="percentage"
                nameKey="industry"
                innerRadius={58}
                outerRadius={92}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={entry.industry} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: unknown) => [`${String(value ?? "")}%`, "Share"]}
                contentStyle={{ border: "1px solid #cbd5e1", borderRadius: 8, fontSize: 12 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="grid gap-2 text-xs text-slate-600">
          {data.map((entry, index) => (
            <li key={entry.industry} className="flex items-center justify-between gap-2">
              <span className="flex min-w-0 items-center gap-2">
                <span
                  className="size-2 shrink-0 rounded-full"
                  style={{ backgroundColor: colors[index % colors.length] }}
                  aria-hidden="true"
                />
                <span className="truncate">{entry.industry}</span>
              </span>
              <span className="font-bold text-slate-800">{entry.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default IndustryDistribution;
