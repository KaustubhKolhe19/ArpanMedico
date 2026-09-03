import { Helmet } from "react-helmet-async";
import EnquiryCTA from "../components/common/EnquiryCTA";
import IndustryCategoryGrid from "../components/industries/IndustryCategoryGrid";
import PageHero from "../components/common/PageHero";
import { business } from "../data/business";

function Industries() {
  const pageTitle = `Industries We Serve | ${business.name}`;
  const pageDescription = `${business.name} in ${business.address.city}, ${business.address.state} serves confirmed healthcare customer types including hospitals, clinics, medical stores and healthcare institutions.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="/industries" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/industries" />
      </Helmet>
      <PageHero
        eyebrow="Industries we serve"
        title={`Healthcare connections in ${business.address.city}.`}
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
