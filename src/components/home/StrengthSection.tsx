import { strengths } from "../../data/strengths";
import SectionHeader from "../common/SectionHeader";

function StrengthSection() {
  const featured = strengths.slice(0, 4);
  const supporting = strengths.slice(4);

  return (
    <section className="bg-slate-950 text-white section-pad" aria-labelledby="strength-heading">
      <div className="site-container">
        <SectionHeader
          eyebrow="Our strength"
          title="A clear focus on supply, service and relationships."
          titleId="strength-heading"
          description="Confirmed strengths that describe Arpan Medico's business approach."
          dark
        />
        <ol className="mt-8 grid gap-x-12 gap-y-7 sm:grid-cols-2">
          {featured.map((item, index) => (
            <li key={item.id} className="border-t border-white/15 pt-4">
              <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-teal-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2.5 text-base font-semibold leading-7 tracking-tight sm:text-lg">{item.name}</p>
            </li>
          ))}
        </ol>
        <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-white/10 pt-5 text-sm text-slate-400">
          {supporting.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default StrengthSection;
