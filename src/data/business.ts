import type { BusinessInfo, NavigationItem } from "../types";
import { productCategories } from "./products";

const primaryPhoneNumber = "9529856595";

export const business: BusinessInfo = {
  name: "ARPAN MEDICO",
  owner: "Milan Pradip Fargade",
  description: "Surgical, Medical & Hospital Supplies",
  introduction: [
    "Arpan Medico supplies medicines, surgical instruments, hospital consumables, and healthcare products from Sangamner, Maharashtra. The business is led by Milan Pradip Fargade and serves hospitals, clinics, pharmacies, and corporate healthcare organizations.",
    "Arpan Medico's medical and surgical product lines include products from healthcare brands represented in its portfolio, for hospitals, clinics, pharmacies, and other healthcare organizations.",
    "Arpan Medico supplies MNC surgical products, injectable medicines, IV fluids, rehabilitation products, and hospital consumables. We cater to hospitals, medical stores, clinics, diagnostic centers, corporate healthcare organizations, and pharmaceutical businesses with a wide range of products.",
    "Our focus is on providing genuine products, competitive wholesale pricing, quick order processing, and dependable customer support to healthcare professionals across Maharashtra.",
  ],
  categories: productCategories.map((category) => category.name),
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
  { label: "Hospital Setup", to: "/hospital-setup" },
  { label: "Contact", to: "/contact" },
];
