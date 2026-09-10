import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import BusinessCategories from "../components/home/BusinessCategories";
import BusinessIntro from "../components/home/BusinessIntro";
import ContactCTA from "../components/home/ContactCTA";
import Hero from "../components/home/Hero";
import HomeBrandsSection from "../components/home/HomeBrandsSection";
import IndustriesSection from "../components/home/IndustriesSection";
import LocationSection from "../components/home/LocationSection";
import SpecialtiesSection from "../components/home/SpecialtiesSection";
import StrengthSection from "../components/home/StrengthSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import OwnerPreview from "../components/owner/OwnerPreview";
import { business } from "../data/business";

const HomeBusinessInsights = lazy(() => import("../components/analytics/HomeBusinessInsights"));

function Home() {
  const { address, contact } = business;
  const seoTitle = `${business.name} | ${business.categories.join(", ")} | ${address.city}`;
  const seoDescription = `${business.name} in ${address.city}, ${address.state}, ${address.country}. ${business.description}.`;
  const structuredData = {
    "@context": "https://schema.org",
    "@id": "https://arpanmedico.com/#business",
    "@type": ["WholesaleStore", "LocalBusiness"],
    name: business.name,
    url: "https://arpanmedico.com",
    description: business.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.line1}, ${address.line2}, ${address.landmark}, ${address.street}`,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressRegion: `${address.district}, ${address.state}`,
      addressCountry: address.country,
    },
    email: contact.email,
    telephone: contact.phoneNumbers.map((phoneNumber) => `+91${phoneNumber}`),
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href="https://arpanmedico.com/" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arpanmedico.com/" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content={`${address.city}, ${address.district}, ${address.state}`} />
        <meta name="geo.position" content="19.5761;74.2070" />
        <meta name="ICBM" content="19.5761, 74.2070" />
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
      <IndustriesSection />
      <WhyChooseSection />
      <StrengthSection />
      <OwnerPreview />
      <LocationSection />
      <ContactCTA />
    </>
  );
}

export default Home;
