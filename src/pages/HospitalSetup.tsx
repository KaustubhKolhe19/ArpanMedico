import {
  Bed,
  Building2,
  Cog,
  Hospital as HospitalIcon,
  Monitor,
  Stethoscope,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import HospitalSetupHero from "../components/hospitalSetup/HospitalSetupHero";

const hospitalSetupRequirements = [
  { title: "Hospital Beds", description: "Hospital beds for setup requirements.", Icon: Bed },
  { title: "Patient Monitors", description: "Patient monitors for hospital requirements.", Icon: Monitor },
  { title: "Hospital Equipment", description: "Equipment for hospital setup requirements.", Icon: HospitalIcon },
  { title: "Hospital Machines", description: "Machines for hospital setup requirements.", Icon: Cog },
  { title: "Surgical Equipment", description: "Equipment for surgical requirements.", Icon: Stethoscope },
  {
    title: "MNC Company Equipment / Products",
    description: "MNC company equipment and products for hospitals.",
    Icon: Building2,
  },
];

function HospitalSetup() {
  return (
    <>
      <Helmet>
        <title>Hospital Setup Solutions | Arpan Medico</title>
        <meta
          name="description"
          content="Enquire with Arpan Medico about hospital equipment and medical and surgical supply requirements for hospital setup."
        />
        <link rel="canonical" href="https://arpanmedico.com/hospital-setup" />
        <meta property="og:title" content="Hospital Setup Solutions | Arpan Medico" />
        <meta
          property="og:description"
          content="Enquire with Arpan Medico about hospital equipment and medical and surgical supply requirements for hospital setup."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arpanmedico.com/hospital-setup" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hospital Setup Solutions | Arpan Medico" />
        <meta
          name="twitter:description"
          content="Enquire with Arpan Medico about hospital equipment and medical and surgical supply requirements for hospital setup."
        />
      </Helmet>

      {/* Modern Integrated Hero Header */}
      <HospitalSetupHero />

      {/* Equipment & Requirements Grid */}
      <section className="bg-slate-50 section-pad" aria-labelledby="hospital-setup-requirements">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="section-eyebrow text-teal-700">Equipment &amp; Supplies</p>
            <h2 id="hospital-setup-requirements" className="section-title text-slate-950">
              Hospital Setup Equipment &amp; Solutions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Explore equipment and product categories for hospital setup requirements.
            </p>
          </div>
          <ul className="mt-8 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {hospitalSetupRequirements.map(({ title, description, Icon }) => (
              <li
                key={title}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-teal-500/40 hover:shadow-md"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border border-teal-100/80 bg-teal-50/90 text-teal-700">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold tracking-tight text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hospital Support Section */}
      <section className="border-y border-slate-200/80 bg-white section-pad" aria-labelledby="hospital-setup-support">
        <div className="site-container grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-5">
          <div className="flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
            <HospitalIcon size={24} aria-hidden="true" />
          </div>
          <div className="max-w-3xl">
            <p className="section-eyebrow text-teal-700">Hospital Support</p>
            <h2 id="hospital-setup-support" className="section-title text-slate-950">
              Support for Hospital Setup Requirements
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Arpan Medico can support hospital setup requirements with medical, surgical and hospital equipment and products.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HospitalSetup;
