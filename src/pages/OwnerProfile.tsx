import { Helmet } from "react-helmet-async";
import OwnerBusinessFocus from "../components/owner/OwnerBusinessFocus";
import OwnerContactCTA from "../components/owner/OwnerContactCTA";
import OwnerHero from "../components/owner/OwnerHero";
import OwnerProfileSection from "../components/owner/OwnerProfileSection";
import { owner } from "../data/owner";

function OwnerProfile() {
  const pageTitle = `${owner.name} | ${owner.business} - Sangamner`;
  const pageDescription = `Meet ${owner.name}, Business Owner of ${owner.business}, a business focused on surgical, medical and hospital supplies.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="/about-owner" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="/about-owner" />
      </Helmet>
      <OwnerHero />
      <OwnerProfileSection />
      <OwnerBusinessFocus />
      <OwnerContactCTA />
    </>
  );
}

export default OwnerProfile;