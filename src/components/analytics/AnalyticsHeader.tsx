import { business } from "../../data/business";
import { DEMO_DATA_LABEL, DEMO_DATA_NOTICE } from "../../data/analyticsDemo";

function AnalyticsHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="site-container flex flex-col gap-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:py-10">
        <div>
          <p className="section-eyebrow text-teal-700">Business intelligence</p>
          <h1 className="section-title text-slate-950">Analytics Dashboard</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Sample reporting view for {business.name}. Connect a live source when business data is ready.
          </p>
        </div>
        <aside className="max-w-sm">
          <p className="inline-flex items-center bg-slate-950 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-teal-300">
            {DEMO_DATA_LABEL}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-500">{DEMO_DATA_NOTICE}</p>
        </aside>
      </div>
    </header>
  );
}

export default AnalyticsHeader;
