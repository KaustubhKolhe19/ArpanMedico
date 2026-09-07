import { Award, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { strengths } from "../../data/strengths";

const strengthIcons = [ShieldCheck, HeartHandshake, Zap, Award, Sparkles, CheckCircle2];

function StrengthSection() {
  const featured = strengths.slice(0, 4);
  const supporting = strengths.slice(4);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white section-pad" aria-labelledby="strength-heading">
      {/* Background radial ambient light */}
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 size-[30rem] rounded-full bg-teal-500/10 blur-[120px]" />

      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-eyebrow text-teal-300">Our Strength</span>
            <h2 id="strength-heading" className="section-title mt-2 text-3xl font-bold tracking-tight text-white">
              Supply Reliability &amp; Core Competencies
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-300">
            Proven business strengths driving long-term healthcare partnerships across Sangamner.
          </p>
        </div>

        {/* Featured Strength Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item, index) => {
            const Icon = strengthIcons[index % strengthIcons.length];
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md transition duration-200 hover:border-teal-500/50 hover:bg-slate-900"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300 border border-teal-500/20 group-hover:bg-teal-600 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-bold text-teal-400">0{index + 1}</span>
                  </div>
                  <h3 className="mt-4 text-base font-bold tracking-tight text-white group-hover:text-teal-200">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Core operational strength of Arpan Medico ensuring high satisfaction for medical clients.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Strengths List */}
        {supporting.length > 0 ? (
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6 text-xs text-slate-300">
            <span className="font-semibold text-teal-300 uppercase tracking-wider">Additional Advantages:</span>
            {supporting.map((item) => (
              <span
                key={item.id}
                className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-slate-300"
              >
                {item.name}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default StrengthSection;
