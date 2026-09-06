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
import { phoneHref } from "../lib/display";

const HomeBusinessInsights = lazy(() => import("../components/analytics/HomeBusinessInsights"));

function Home() {
  const { address, contact } = business;
  const seoTitle = `${business.name} | ${business.categories.join(", ")} | ${address.city}`;
  const seoDescription = `${business.name} in ${address.city}, ${address.state}, ${address.country}. ${business.description}.`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "WholesaleStore", "LocalBusiness"],
    name: business.name,
    description: business.description,
    founder: {
      "@type": "Person",
      name: business.owner,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.line1}, ${address.line2}, ${address.landmark}, ${address.street}`,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressRegion: address.state,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.5761,
      longitude: 74.207,
    },
    email: contact.email,
    telephone: contact.phoneNumbers.map(phoneHref),
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href="/" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
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
