import { specialties } from "../../data/specialties";
import SectionHeader from "../common/SectionHeader";

function SpecialtiesSection() {
  const [feature, ...supporting] = specialties;

  return (
    <section className="bg-white section-pad" aria-labelledby="specialties-heading">
      <div className="site-container">
        <SectionHeader
          eyebrow="Our specialities"
          title="Focused on the work healthcare supply demands."
          titleId="specialties-heading"
          description="These capabilities and facilities are confirmed as part of Arpan Medico's business information."
        />
        <div className="mt-8">
          <article className="border-l-2 border-teal-600 py-1 pl-5">
            <p className="section-eyebrow text-teal-700">Featured speciality</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
              {feature.name}
            </h3>
          </article>
          <ul className="mt-6 grid sm:grid-cols-2 sm:gap-x-12">
            {supporting.map((item) => (
              <li key={item.id} className="flex items-start gap-3 border-t border-slate-200 py-3">
                <span className="mt-2 size-1.5 shrink-0 bg-teal-600" aria-hidden="true" />
                <span className="text-sm font-medium leading-6 text-slate-700">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialtiesSection;
