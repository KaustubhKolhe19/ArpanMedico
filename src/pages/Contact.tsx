import { Helmet } from "react-helmet-async";
import ContactEnquirySection from "../components/contact/ContactEnquirySection";
import ContactFinalCTA from "../components/contact/ContactFinalCTA";
import ContactHero from "../components/contact/ContactHero";
import { business } from "../data/business";

const businessId = "https://arpanmedico.com/#business";

function Contact() {
  const { address } = business;
  const pageTitle = `Contact ${business.name} | Surgical & Medical Supplies in ${address.city}`;
  const pageDescription = `Contact ${business.name} in ${address.city} for medical, surgical and hospital supply requirements. Call, email or send an enquiry on WhatsApp.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@id": businessId,
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://arpanmedico.com/contact" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arpanmedico.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content={`${address.city}, ${address.state}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <ContactHero />
      <ContactEnquirySection />
      <ContactFinalCTA />
    </>
  );
}

export default Contact;
