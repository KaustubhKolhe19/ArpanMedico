import { business } from "../../data/business";
import EnquiryCTA from "../common/EnquiryCTA";

function ProductEnquiryCTA() {
  return (
    <EnquiryCTA
      eyebrow="Enquiries"
      title="Looking for a specific medical or surgical supply?"
      description={`Send your requirement to ${business.name}.`}
      whatsappMessage={`Hello ${business.name}, I would like to enquire about your products.`}
    />
  );
}

export default ProductEnquiryCTA;
