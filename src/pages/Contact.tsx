import { Helmet } from "react-helmet-async";
import ContactEnquirySection from "../components/contact/ContactEnquirySection";
import ContactFinalCTA from "../components/contact/ContactFinalCTA";
import ContactHero from "../components/contact/ContactHero";
import { business } from "../data/business";

function Contact() {
  const { address } = business;
  const pageTitle = `Contact ${business.name} | Surgical & Medical Supplies in ${address.city}`;
  const pageDescription = `Contact ${business.name} in ${address.city} for medical, surgical and hospital supply requirements. Call, email or send an enquiry on WhatsApp.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="/contact" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/contact" />
      </Helmet>
      <ContactHero />
      <ContactEnquirySection />
      <ContactFinalCTA />
    </>
  );
}

export default Contact;
