import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createWhatsAppUrl } from "../../lib/whatsapp";

const hospitalSetupRequirements = [
  "Hospital Beds",
  "Patient Monitors",
  "Hospital Equipment",
  "Hospital Machines",
  "Surgical Equipment",
  "MNC Company Equipment / Products",
];

function HospitalSetupSection() {
  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="hospital-setup-heading">
      <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <img
            src="/assets/products/hospital-category.svg"
            alt="Hospital setup with a modern patient bed and bedside monitor"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="section-eyebrow text-teal-700">HOSPITAL SETUP</p>
          <h2 id="hospital-setup-heading" className="section-title text-slate-950">
            Complete Hospital Setup Solutions
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Arpan Medico can support hospital setup requirements with hospital beds, patient monitors, hospital equipment, hospital machines, surgical equipment and MNC company products.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {hospitalSetupRequirements.map((requirement) => (
              <li key={requirement} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
                {requirement}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/hospital-setup" className="btn btn-primary">
              Explore Hospital Setup
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={createWhatsAppUrl("Hello Arpan Medico, I would like to enquire about complete hospital setup solutions.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HospitalSetupSection;
