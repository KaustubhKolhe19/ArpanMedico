import { ArrowRight, Hospital, PackageCheck, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

function StrengthSection() {
  const capabilities = [
    {
      title: "Medical & Surgical Supplies",
      description: "Products for hospitals, clinics, healthcare professionals and institutional requirements.",
      Icon: Stethoscope,
      to: "/products",
    },
    {
      title: "Hospital Equipment",
      description: "Hospital beds, patient monitors, machines and essential equipment.",
      Icon: Hospital,
      to: "/hospital-setup",
    },
    {
      title: "Hospital Setup Support",
      description: "A broad range of products for hospitals planning new setup or procurement requirements.",
      Icon: PackageCheck,
      to: "/hospital-setup",
    },
  ];

  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="strength-heading">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-eyebrow text-teal-700">Business Capabilities</span>
            <h2 id="strength-heading" className="section-title mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Medical, Surgical &amp; Hospital Supplies
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Supply categories for healthcare and hospital requirements in Sangamner.
          </p>
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {capabilities.map(({ title, description, Icon, to }) => (
            <li key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:border-teal-500/40">
              <div className="flex size-10 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-teal-700">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold tracking-tight text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              <Link to={to} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-teal-700 hover:text-teal-900">
                Explore requirements
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default StrengthSection;
