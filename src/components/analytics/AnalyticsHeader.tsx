import { business } from "../../data/business";

function AnalyticsHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="site-container flex flex-col gap-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:py-10">
        <div>
          <p className="section-eyebrow text-teal-700">Business Intelligence</p>
          <h1 className="section-title text-slate-950">Supply &amp; Performance Analytics</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Performance overview reporting for {business.name}. Tracking monthly order volumes, revenue trends, and healthcare sector demand.
          </p>
        </div>
        <aside className="max-w-sm">
          <p className="inline-flex items-center rounded-md bg-teal-50 border border-teal-200/80 px-2.5 py-1 text-[0.7rem] font-semibold text-teal-800">
            Official Performance Overview
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-500">Live operational data for healthcare supply distribution across Maharashtra.</p>
        </aside>
      </div>
    </header>
  );
}

export default AnalyticsHeader;
