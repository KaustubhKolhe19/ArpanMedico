import { DEMO_DATA_LABEL, DEMO_DATA_NOTICE } from "../../data/analyticsDemo";

function DemoDataBadge() {
  return (
    <aside className="max-w-sm" aria-label="Demonstration notice">
      <p className="inline-flex items-center bg-slate-950 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-teal-300">
        {DEMO_DATA_LABEL}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-500">{DEMO_DATA_NOTICE}</p>
    </aside>
  );
}

export default DemoDataBadge;
