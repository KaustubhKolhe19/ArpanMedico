import { Helmet } from "react-helmet-async";
import BrandEnquiryCTA from "../components/brands/BrandEnquiryCTA";
import BrandIntro from "../components/brands/BrandIntro";
import BrandShowcase from "../components/brands/BrandShowcase";
import BrandsHero from "../components/brands/BrandsHero";
import { business } from "../data/business";

function Brands() {
  const { address } = business;
  const pageTitle = `Healthcare Brands & Medical Products | ${business.name} ${address.city}`;
  const pageDescription = `Explore healthcare brands associated with ${business.name} in ${address.city}, ${address.state}. Contact us for brand or product requirements.`;

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
      </Helmet>

      <BrandsHero />
      <BrandIntro />
      <BrandShowcase />
      <BrandEnquiryCTA />
    </>
  );
}

export default Brands;
