import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import BusinessCategories from "../components/home/BusinessCategories";
import BusinessIntro from "../components/home/BusinessIntro";
import ContactCTA from "../components/home/ContactCTA";
import Hero from "../components/home/Hero";
import HomeBrandsSection from "../components/home/HomeBrandsSection";
import LocationSection from "../components/home/LocationSection";
import SpecialtiesSection from "../components/home/SpecialtiesSection";
import StrengthSection from "../components/home/StrengthSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import OwnerPreview from "../components/owner/OwnerPreview";
import { business } from "../data/business";
import { industries } from "../data/industries";
import { phoneHref } from "../lib/display";

const HomeBusinessInsights = lazy(() => import("../components/analytics/HomeBusinessInsights"));

function Home() {
  const { address, contact } = business;
  const seoTitle = `${business.name} | ${business.categories.join(", ")} | ${address.city}`;
  const seoDescription = `${business.name} in ${address.city}, ${address.state}, ${address.country}. ${business.description}.`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.line1}, ${address.line2}, ${address.landmark}, ${address.street}`,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressRegion: address.state,
      addressCountry: address.country,
    },
    email: contact.email,
    telephone: contact.phoneNumbers.map(phoneHref),
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <Hero />
      <BusinessIntro />
      <BusinessCategories />
      <SpecialtiesSection />
      <Suspense fallback={<div className="bg-slate-50 section-pad" aria-busy="true" aria-label="Loading business insights" />}>
        <HomeBusinessInsights />
      </Suspense>
      <HomeBrandsSection />
      <IndustriesPreview />
      <WhyChooseSection />
      <StrengthSection />
      <OwnerPreview />
      <LocationSection />
      <ContactCTA />
    </>
  );
}

function IndustriesPreview() {
  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="home-industries-heading">
      <div className="site-container">
        <p className="section-eyebrow text-teal-700">Arpan Medico</p>
        <h2 id="home-industries-heading" className="section-title text-slate-950">
          Industries We Serve
        </h2>
        <ul className="mt-5 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <li key={industry.id} className="border-t border-slate-200 py-3 text-sm font-medium leading-6 text-slate-700">
              {industry.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;
