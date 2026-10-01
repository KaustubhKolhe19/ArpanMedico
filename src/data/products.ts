import type { ProductCategory, ProductCategoryId, ProductItem } from "../types";

const createProductItems = (
  category: ProductCategoryId,
  names: readonly string[],
): readonly ProductItem[] =>
  names.map((name) => ({
    id: `${category}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    name,
    category,
  }));

export const productCategories: readonly ProductCategory[] = [
  {
    id: "medicines",
    name: "Medicines",
    description: "Medical products for healthcare and institutional requirements.",
    iconIdentifier: "pill",
    items: createProductItems("medicines", [
      "Prescription Medicines",
      "OTC Medicines",
      "Injectable Medicines",
      "IV Fluids",
      "Emergency Medicines",
    ]),
  },
  {
    id: "surgical-products",
    name: "Surgical",
    description: "Surgical supplies and consumables for healthcare requirements.",
    iconIdentifier: "scissors",
    items: createProductItems("surgical-products", [
      "Sutures",
      "Surgical Gloves",
      "Surgical Masks",
      "Surgical Caps",
      "Disposable Aprons",
      "Dressing Materials",
      "Syringes",
      "IV Sets",
      "Cannulas",
      "Catheters",
      "Medical Tapes",
      "Bandages",
    ]),
  },
  {
    id: "hospital-beds",
    name: "Hospital Beds",
    description: "Hospital beds for hospital setup and procurement requirements.",
    iconIdentifier: "bed",
    items: createProductItems("hospital-beds", ["Hospital Beds"]),
  },
  {
    id: "patient-monitors",
    name: "Patient Monitors",
    description: "Patient monitors for hospital equipment requirements.",
    iconIdentifier: "monitor",
    items: createProductItems("patient-monitors", ["Patient Monitors"]),
  },
  {
    id: "hospital-equipment",
    name: "Hospital Equipment",
    description: "Hospital equipment and supply product lines.",
    iconIdentifier: "hospital",
    items: createProductItems("hospital-equipment", [
      "Hospital Equipment",
      "Hospital Consumables",
      "Medical Disposable Products",
      "Hospital Supplies",
    ]),
  },
  {
    id: "hospital-machines",
    name: "Hospital Machines",
    description: "Hospital machines for setup and procurement requirements.",
    iconIdentifier: "cog",
    items: createProductItems("hospital-machines", ["Hospital Machines"]),
  },
  {
    id: "surgical-equipment",
    name: "Surgical Equipment",
    description: "Surgical equipment and instrument product lines.",
    iconIdentifier: "stethoscope",
    items: createProductItems("surgical-equipment", [
      "Surgical Equipment",
      "Surgical Instruments & Consumables",
    ]),
  },
  {
    id: "mnc-company-equipment-products",
    name: "MNC Company Equipment & Products",
    description: "Healthcare equipment and product lines from leading multinational and established healthcare companies.",
    iconIdentifier: "building-2",
    items: [],
    linkTo: "/brands",
    linkLabel: "View Brands",
  },
  {
    id: "mobility-patient-care",
    name: "Mobility & Patient Care Products",
    description: "Mobility, rehabilitation and patient care product lines.",
    iconIdentifier: "accessibility",
    items: [
      ...createProductItems("mobility-patient-care", [
        "Walkers",
        "Rehabilitation Products",
        "Hospital Furniture",
      ]),
      {
        id: "mobility-patient-care-commode-chair",
        name: "Commode Chair",
        category: "mobility-patient-care",
        image: "/assets/brands/commode-chair-product.jpg",
        verificationStatus: "pending",
      },
    ],
  },
  {
    id: "instruments",
    name: "Instruments & Other Supplies",
    description: "Additional medical, patient care and institutional supply lines.",
    iconIdentifier: "stethoscope",
    items: createProductItems("instruments", [
      "Face Masks",
      "PPE Products",
      "Premium PPE Products",
      "Medical Store Supplies",
      "Corporate Healthcare Supplies",
      "Pharmacy Distribution",
      "B2B Medical Products",
    ]),
  },
];
