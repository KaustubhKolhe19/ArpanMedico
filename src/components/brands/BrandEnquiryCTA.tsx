import { business } from "../../data/business";
import EnquiryCTA from "../common/EnquiryCTA";

function BrandEnquiryCTA() {
  return (
    <EnquiryCTA
      eyebrow="Brand Distribution Enquiries"
      title="Looking for a specific MNC brand or product line?"
      description={`Send your specific medical brand requirement directly to ${business.name}.`}
      whatsappMessage={`Hello ${business.name}, I would like to enquire about your available brands.`}
    />
  );
}

export default BrandEnquiryCTA;
