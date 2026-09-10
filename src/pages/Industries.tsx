import { Helmet } from "react-helmet-async";
import EnquiryCTA from "../components/common/EnquiryCTA";
import IndustryCategoryGrid from "../components/industries/IndustryCategoryGrid";
import PageHero from "../components/common/PageHero";
import { business } from "../data/business";
import { industries } from "../data/industries";

function Industries() {
  const pageTitle = `Industries We Serve | ${business.name}`;
  const pageDescription = `${business.name} in ${business.address.city}, ${business.address.state} serves confirmed healthcare customer types including hospitals, clinics, medical stores and healthcare institutions.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Healthcare Sectors Served",
    numberOfItems: industries.length,
    itemListElement: industries.map((industry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: industry.name,
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
        <meta name="geo.placename" content={`${business.address.city}, ${business.address.state}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <PageHero
        eyebrow="Industries we serve"
        title="Healthcare Industries Served by Arpan Medico"
        description={`${business.name} works with the following confirmed customer types and healthcare organizations.`}
        locationLabel={business.address.city}
        locationHint={`${business.address.state}, ${business.address.country}`}
      />
      <IndustryCategoryGrid />
      <EnquiryCTA
        eyebrow="Enquiries"
        title="Have a healthcare supply enquiry?"
        description={`Contact ${business.name} with your requirement.`}
        contactLink
        showCall={false}
      />
    </>
  );
}

export default Industries;
