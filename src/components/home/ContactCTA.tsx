import { business } from "../../data/business";
import EnquiryCTA from "../common/EnquiryCTA";

function ContactCTA() {
  return (
    <EnquiryCTA
      eyebrow="Start a conversation"
      title="Looking for medical, surgical or instrument supplies?"
      description={`Contact ${business.name} in ${business.address.city} with your requirement.`}
    />
  );
}

export default ContactCTA;
