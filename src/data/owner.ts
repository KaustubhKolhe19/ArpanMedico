import { business } from "./business";
import type { OwnerProfile } from "../types";

export const owner: OwnerProfile = {
  name: business.owner,
  designation: "Business Owner",
  business: business.name,
  location: business.location,
  phone: business.contact.phone,
  whatsapp: business.contact.whatsapp,
  email: business.contact.email,
  introduction: "Arpan Medico is a Sangamner-based business serving the surgical, medical and hospital supply segment.",
  businessFocus: business.description,
  focusAreas: ["Surgical", "Medical", "Hospital Supplies"],
  photo: "/assets/owner/owner.png",
};