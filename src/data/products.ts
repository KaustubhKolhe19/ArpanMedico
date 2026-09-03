import type { ProductCategory, ProductItem } from "../types";

const createProductItems = (
  category: ProductCategory["id"],
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
    name: "Surgical Products",
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
    id: "medical-equipment-consumables",
    name: "Medical Equipment & Consumables",
    iconIdentifier: "stethoscope",
    items: createProductItems("medical-equipment-consumables", [
      "Walkers",
      "Rehabilitation Products",
      "Face Masks",
      "PPE Products",
      "Premium PPE Products",
      "Hospital Consumables",
      "Medical Disposable Products",
      "Hospital Furniture",
    ]),
  },
  {
    id: "healthcare-supplies",
    name: "Healthcare Supplies",
    iconIdentifier: "hospital",
    items: createProductItems("healthcare-supplies", [
      "Hospital Supplies",
      "Medical Store Supplies",
      "Corporate Healthcare Supplies",
      "Pharmacy Distribution",
      "B2B Medical Products",
      "Surgical Instruments & Consumables",
    ]),
  },
];
