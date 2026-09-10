import { ArrowRight, Award, Building2, Clock, MessageSquare, ShieldCheck, ThermometerSnowflake, Truck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import EnquiryCTA from "../components/common/EnquiryCTA";
import IndustryCategoryGrid from "../components/industries/IndustryCategoryGrid";
import { business } from "../data/business";
import { industries } from "../data/industries";

function Industries() {
  const { address } = business;
  const pageTitle = `Industries We Serve | ${business.name} ${address.city}`;
  const pageDescription = `Dedicated wholesale pharmaceutical, surgical, and medical supply distribution for hospitals, clinics, medical stores, and healthcare institutions across Maharashtra.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Healthcare Sectors Served",
    numberOfItems: industries.length,
    itemListElement: industries.map((industry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: industry.name,
      description: industry.description,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://arpanmedico.com/industries" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arpanmedico.com/industries" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content={`${address.city}, ${address.state}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Rich Dark Ambient Hero Banner */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800">
        <div
          className="pointer-events-none absolute -top-32 -left-32 size-[450px] rounded-full bg-teal-500/10 blur-[120px] animate-glow-pulse"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 size-[450px] rounded-full bg-emerald-500/10 blur-[130px] animate-glow-pulse"
          aria-hidden="true"
        />

        <div className="site-container hero-pad relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/70 px-3.5 py-1.5 backdrop-blur-md">
              <Building2 size={14} className="text-teal-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Healthcare Sectors • {address.city}, {address.state}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Healthcare Sectors Served by <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">Arpan Medico</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
              Providing dedicated wholesale pharmaceutical fulfillment, sterile surgical consumable inventories, and medical supply chain solutions for hospitals, clinics, pharmacies, and healthcare institutions across Maharashtra.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <Link
                to="/contact#contact-form"
                className="inline-flex items-center gap-2.5 rounded-lg bg-teal-600 px-5 py-3 text-xs font-bold text-white shadow-lg transition-all hover:bg-teal-500 active:scale-95"
              >
                <MessageSquare size={16} />
                <span>Start a Conversation / Institutional Enquiry</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 border-t border-slate-800/80 pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-300">
                <Building2 size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">8 Healthcare Sectors</p>
                <p className="text-[0.65rem] text-slate-400">Hospitals, Clinics, Pharmacies</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
                <Truck size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Same-Day Express</p>
                <p className="text-[0.65rem] text-slate-400">Sangamner &amp; MH Hub Dispatch</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3 col-span-2 sm:col-span-1">
              <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Bulk Institutional Rates</p>
                <p className="text-[0.65rem] text-slate-400">Transparent B2B Pricing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustryCategoryGrid />

      {/* Sector Value Pillars */}
      <section className="bg-white section-pad border-y border-slate-200/80">
        <div className="site-container">
          <div className="max-w-xl">
            <p className="section-eyebrow text-teal-700">Institutional Capabilities</p>
            <h2 className="section-title text-slate-950">Why Healthcare Leaders Partner With Us</h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-teal-100/70 text-teal-700">
                <Clock size={22} />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">Emergency &amp; Scheduled Supply</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Same-day emergency fulfillment for critical surgical &amp; ICU supplies, alongside structured recurring stock replenishment.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100/70 text-emerald-700">
                <ThermometerSnowflake size={22} />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">Cold-Chain &amp; Lot Control</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Temperature-monitored storage and strict batch tracking for sensitive biologics, vaccines, and MNC prescription injectables.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-100/70 text-cyan-700">
                <ShieldCheck size={22} />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">100% MNC License Assurance</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Direct factory sourcing from Ethicon, Nipro, BD, Polymed, Romsons &amp; Healthium with full FDA regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA
        eyebrow="Institutional Supply Enquiries"
        title="Need medical supply distribution for your facility?"
        description={`Contact ${business.name} to discuss institutional supply contracts or request a customized B2B price quote.`}
        contactLink
        showCall={false}
      />
    </>
  );
}

export default Industries;
