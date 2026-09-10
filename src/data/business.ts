import type { BusinessInfo, NavigationItem } from "../types";

const primaryPhoneNumber = "9529856595";

export const business: BusinessInfo = {
  name: "ARPAN MEDICO",
  owner: "Milan Pradip Fargade",
  description: "Surgical, Medical & Hospital Supplies",
  introduction: [
    "Arpan Medico is a trusted wholesale supplier of medicines, surgical instruments, hospital consumables, and healthcare products based in Sangamner, Maharashtra. Under the leadership of Milan Pradip Fargade, the company is committed to providing genuine MNC healthcare products, competitive pricing, and prompt service to hospitals, clinics, pharmacies, and corporate healthcare organizations.",
    "With a strong distribution network and partnerships with leading medical brands, Arpan Medico ensures same-day dispatch, quality assurance, and reliable delivery. The company's customer-first approach has made it a preferred destination for healthcare professionals seeking authentic surgical products and pharmaceutical supplies.",
    "Arpan Medico is an authorized supplier of premium MNC surgical products, injectable medicines, IV fluids, rehabilitation products, and hospital consumables. We cater to hospitals, medical stores, clinics, diagnostic centers, corporate healthcare organizations, and pharmaceutical businesses with a wide range of quality products.",
    "Our focus is on providing genuine products, competitive wholesale pricing, quick order processing, and dependable customer support to healthcare professionals across Maharashtra.",
  ],
  categories: ["Medicines", "Surgical", "Instruments"],
  address: {
    line1: "Arpan Medico",
    line2: "Kadlag Complex",
    landmark: "Opp. Merchant Bank",
    street: "New Nagar Road",
    city: "Sangamner",
    postalCode: "422605",
    district: "Ahilyanagar (Ahmednagar)",
    state: "Maharashtra",
    country: "India",
  },
  get location() {
    return `${this.address.city}, ${this.address.state}, ${this.address.country}`;
  },
  contact: {
    email: "arpanmedicosangamner@gmail.com",
    phone: primaryPhoneNumber,
    whatsapp: primaryPhoneNumber,
    additionalPhoneNumbers: ["9075735070", "9767733323", "8766040488"],
    get phoneNumbers() {
      return [this.phone, ...this.additionalPhoneNumbers];
    },
  },
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Brands", to: "/brands" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
];
