import {
  ArrowUpRight,
  Bed,
  Building2,
  Cog,
  Hospital as HospitalIcon,
  Monitor,
  Stethoscope,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/common/PageHero";
import { business } from "../data/business";
import { createWhatsAppUrl } from "../lib/whatsapp";

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

const setupHighlights = [
  {
    title: "Complete Hospital Setup",
    description: "Equipment and supply requirements",
    Icon: HospitalIcon,
    iconClassName: "bg-teal-500/10 text-teal-300",
  },
  {
    title: "Hospital Equipment & Machines",
    description: "Hospital equipment and machines",
    Icon: Cog,
    iconClassName: "bg-emerald-500/10 text-emerald-300",
  },
  {
    title: "Surgical Equipment & Supplies",
    description: "Medical and surgical requirements",
    Icon: Stethoscope,
    iconClassName: "bg-cyan-500/10 text-cyan-300",
  },
];

function HospitalSetup() {
  const message =
    "Hello Arpan Medico, I am planning a hospital setup and would like to enquire about hospital beds, patient monitors, hospital equipment, hospital machines, surgical equipment, and other required products.";

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
      <PageHero
        eyebrow="HOSPITAL SOLUTIONS"
        title="Complete Hospital Setup Solutions"
        description="Arpan Medico can support hospitals with equipment and medical and surgical supply requirements for hospital setup."
        locationLabel={business.address.city}
        locationHint={`${business.address.state}, ${business.address.country}`}
        action={
          <a
            href={createWhatsAppUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discuss your hospital setup with Arpan Medico on WhatsApp"
            className="btn btn-on-dark"
          >
            Discuss Your Hospital Setup
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        }
      />
      <section className="border-t border-slate-800 bg-slate-950 py-5 sm:py-6" aria-label="Hospital setup highlights">
        <div className="site-container">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {setupHighlights.map(({ title, description, Icon, iconClassName }) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3"
              >
                <div className={`flex size-9 items-center justify-center rounded-lg ${iconClassName}`}>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{title}</p>
                  <p className="text-[0.65rem] text-slate-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
      <section className="bg-teal-700 text-white" aria-labelledby="hospital-setup-enquiry">
        <div className="site-container flex flex-col gap-6 py-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-10">
          <div className="max-w-2xl">
            <p className="section-eyebrow text-teal-100">Hospital Setup Enquiries</p>
            <h2 id="hospital-setup-enquiry" className="section-title text-white">
              Planning a Hospital Setup?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-teal-50 sm:text-[0.975rem]">
              Discuss your hospital equipment and medical or surgical supply requirements with Arpan Medico.
            </p>
          </div>
          <a
            href={createWhatsAppUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discuss your hospital setup with Arpan Medico on WhatsApp"
            className="btn btn-on-dark shrink-0"
          >
            Discuss Your Hospital Setup
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}

export default HospitalSetup;
