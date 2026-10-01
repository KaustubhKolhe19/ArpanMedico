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
    <section className="relative overflow-hidden bg-slate-950 text-white section-pad" aria-labelledby="strength-heading">
      {/* Background radial ambient light */}
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 size-[30rem] rounded-full bg-teal-500/10 blur-[120px]" />

      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-eyebrow text-teal-300">Business Capabilities</span>
            <h2 id="strength-heading" className="section-title mt-2 text-3xl font-bold tracking-tight text-white">
              Medical, Surgical &amp; Hospital Supplies
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-300">
            Supply categories for healthcare and hospital requirements in Sangamner.
          </p>
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {capabilities.map(({ title, description, Icon, to }) => (
            <li key={title} className="rounded-xl border border-white/10 bg-slate-900/60 p-5 transition duration-200 hover:border-teal-500/40">
              <div className="flex size-10 items-center justify-center rounded-xl border border-teal-500/20 bg-teal-500/10 text-teal-300">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold tracking-tight text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
              <Link to={to} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-teal-300 hover:text-white">
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
