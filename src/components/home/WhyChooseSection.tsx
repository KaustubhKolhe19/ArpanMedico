import { CheckCircle2, Clock, Coins, ShieldCheck, Zap } from "lucide-react";
import { whyChooseUs } from "../../data/whyChooseUs";

const whyIcons = [ShieldCheck, Zap, Coins, Clock, CheckCircle2];

function WhyChooseSection() {
  return (
    <section className="bg-white section-pad" aria-labelledby="why-choose-heading">
<<<<<<< HEAD
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Why choose us"
            title="Built around reliable healthcare supply."
            titleId="why-choose-heading"
            description="Client-confirmed reasons to consider Arpan Medico for healthcare supply requirements."
          />
          <img
            src="/assets/why-choose-us-inventory.png"
            alt="Organized pharmacy inventory shelves with boxed healthcare supplies"
            className="mt-8 h-[260px] w-full max-w-[520px] rounded-2xl border border-slate-200 object-cover shadow-[0_6px_18px_rgb(15_23_42/0.05)] sm:h-[300px]"
            loading="lazy"
          />
        </div>
        <ol className="divide-y divide-slate-200 border-y border-slate-200">
          {whyChooseUs.map((item, index) => (
            <li key={item.id} className="flex items-baseline gap-5 py-3.5 transition-colors hover:bg-slate-50">
              <span className="w-6 shrink-0 text-[0.7rem] font-semibold tracking-[0.12em] text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium leading-6 text-slate-800">{item.name}</span>
            </li>
          ))}
        </ol>
=======
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-eyebrow text-teal-700">Why Choose Us</span>
            <h2 id="why-choose-heading" className="section-title mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Built Around Reliable Healthcare Supply
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Proven business advantages that make Arpan Medico the preferred wholesale distributor.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = whyIcons[index % whyIcons.length];
            return (
              <div
                key={item.id}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/40 p-6 transition duration-200 hover:border-teal-500/40 hover:bg-white hover:shadow-lg"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-100/80 text-teal-800 transition duration-200 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[0.7rem] font-bold tracking-widest text-teal-700">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-1 text-base font-bold tracking-tight text-slate-950 group-hover:text-teal-800">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600">
                    Verified business commitment guaranteed by Arpan Medico for all medical &amp; surgical orders.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
>>>>>>> f3cc38868324baac2ebe902eb24138614a520ab5
      </div>
    </section>
  );
}

export default WhyChooseSection;
