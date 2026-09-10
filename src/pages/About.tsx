import {
  Award,
  Building2,
  CheckCircle2,
  PackageCheck,
  ShieldCheck,
  Stethoscope,
  Truck,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import AboutHero from "../components/about/AboutHero";
import BusinessOverview from "../components/about/BusinessOverview";
import EnquiryCTA from "../components/common/EnquiryCTA";
import { business } from "../data/business";
import { industries } from "../data/industries";
import { specialties } from "../data/specialties";
import { strengths } from "../data/strengths";
import { whyChooseUs } from "../data/whyChooseUs";
import OwnerProfileSection from "../components/owner/OwnerProfileSection";

const businessId = "https://arpanmedico.com/#business";

function About() {
  const { address } = business;
  const pageTitle = `${business.name} | About Surgical & Medical Wholesale Distributor Sangamner`;
  const pageDescription = `${business.name} in ${address.city}, ${address.state} — Authorized wholesale supplier of genuine MNC pharmaceuticals, sterile surgical sutures, IV fluids, and hospital consumables directed by ${business.owner}.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@id": businessId,
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://arpanmedico.com/about" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arpanmedico.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content={`${address.city}, ${address.state}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero Header */}
      <AboutHero />

      {/* Owner / Leadership Section */}
      <OwnerProfileSection compact />

      {/* Company Overview Section with Medical Warehouse Visual */}
      <section className="bg-white section-pad border-b border-slate-200/80" aria-labelledby="company-introduction-heading">
        <div className="site-container grid gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* Left Visual Card */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/company_overview.jpg"
                  alt="Arpan Medico Corporate Distribution Headquarters"
                  className="h-[320px] sm:h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Text Details */}
          <div className="lg:col-span-7 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800 border border-teal-200/60">
              <Building2 size={14} className="text-teal-600" />
              <span>Company Overview</span>
            </div>
            <h2 id="company-introduction-heading" className="section-title mt-3 text-slate-950">
              {business.description}
            </h2>
            <p className="mt-2 text-sm font-semibold text-teal-800">
              Directed by visionary leader {business.owner}
            </p>
            <div className="mt-5 space-y-4">
              {business.introduction.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Micro Badge Row */}
            <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-200 pt-5 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-teal-700" />
                <span className="font-semibold text-slate-900">100% Genuine MNC Sourced</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-emerald-700" />
                <span className="font-semibold text-slate-900">Same-Day Express Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <PackageCheck size={16} className="text-cyan-700" />
                <span className="font-semibold text-slate-900">Bulk Wholesale Rates</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Category Overview */}
      <BusinessOverview />

      {/* Specialties Section */}
      <StyledContentGrid title="Our Core Specialties" items={specialties} icon={Stethoscope} />

      {/* Strengths Section */}
      <StyledContentGrid title="Key Operational Strengths" items={strengths} icon={Award} muted />

      {/* Why Choose Us Section */}
      <StyledContentGrid title="Why Healthcare Professionals Choose Us" items={whyChooseUs} icon={ShieldCheck} numbered />

      {/* Industries Served */}
      <StyledContentGrid title="Healthcare Sectors We Serve" items={industries} icon={Building2} muted />

      {/* Enquiry CTA */}
      <EnquiryCTA
        eyebrow="Direct Wholesale Enquiries"
        title="Require Medical or Surgical Supplies?"
        description={`Contact ${business.name} central distribution warehouse in ${address.city}.`}
        contactLink
        showCall={false}
      />
    </>
  );
}

{/* Enhanced Styled Card Grid Component */}
type StyledContentGridProps = {
  title: string;
  items: readonly { id: string; name: string }[];
  muted?: boolean;
  numbered?: boolean;
  icon?: React.ElementType;
};

function StyledContentGrid({ title, items, muted = false, numbered = false, icon: Icon = CheckCircle2 }: StyledContentGridProps) {
  const headingId = `${title.toLowerCase().replace(/\s+/g, "-")}-heading`;

  return (
    <section className={`${muted ? "bg-slate-50" : "bg-white"} section-pad border-b border-slate-200/80`} aria-labelledby={headingId}>
      <div className="site-container">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <Icon size={15} className="text-teal-600" />
            <span>Arpan Medico Capabilities</span>
          </div>
          <h2 id={headingId} className="section-title mt-1.5 text-slate-950">
            {title}
          </h2>
        </div>

        <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex items-start gap-3.5 rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs transition duration-200 hover:border-teal-500/40 hover:shadow-md"
            >
              {numbered ? (
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-xs font-bold text-teal-800">
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : (
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <Icon size={16} />
                </div>
              )}
              <p className="text-xs font-semibold leading-relaxed text-slate-800 pt-1">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
