import { Helmet } from "react-helmet-async";
import BrandEnquiryCTA from "../components/brands/BrandEnquiryCTA";
import BrandIntro from "../components/brands/BrandIntro";
import BrandShowcase from "../components/brands/BrandShowcase";
import BrandsHero from "../components/brands/BrandsHero";
import { business } from "../data/business";
import { showcaseBrands } from "../data/brands";

function Brands() {
  const { address } = business;
  const pageTitle = `Healthcare Brands & Medical Products | ${business.name} ${address.city}`;
  const pageDescription = `Explore healthcare brands associated with ${business.name} in ${address.city}, ${address.state}. Contact us for brand or product requirements.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Associated Healthcare & Surgical Brands",
    numberOfItems: showcaseBrands.length,
    itemListElement: showcaseBrands.map((brand, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: brand.name,
      ...(brand.website ? { url: brand.website } : {}),
    })),
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="/brands" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/brands" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content={`${address.city}, ${address.state}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <BrandsHero />
      <BrandIntro />
      <BrandShowcase />
      <BrandEnquiryCTA />
    </>
  );
}

export default Brands;
