import type { Industry } from "../types";

export const industries: readonly Industry[] = [
  {
    id: "hospitals",
    name: "Hospitals & Surgical Centers",
    iconIdentifier: "hospital",
    description: "Complete pharmaceutical, sterile surgical consumable, and ICU supply solutions for multi-specialty hospitals.",
    highlights: ["Surgical Sutures & IV Fluids", "MNC Prescription Injectables", "Sterile Operating Disposables"],
  },
  {
    id: "clinics",
    name: "Clinics & Polyclinics",
    iconIdentifier: "stethoscope",
    description: "Daily OPD medical supplies, diagnostic consumables, and essential prescription pharmaceuticals.",
    highlights: ["General Rx & OTC Stock", "Sterile Gloves & Face Masks", "Bandages & Dressing Tapes"],
  },
  {
    id: "medical-stores",
    name: "Medical Stores & Pharmacies",
    iconIdentifier: "pill",
    description: "Reliable B2B wholesale pharmaceutical fulfillment with transparent bulk pricing for retail chemists.",
    highlights: ["Ethical MNC Pharmaceuticals", "Fast-Moving OTC Medicines", "Consumer Healthcare Inventory"],
  },
  {
    id: "diagnostic-laboratories",
    name: "Diagnostic Laboratories",
    iconIdentifier: "microscope",
    description: "Sterile sample collection equipment, blood draw syringes, PPE, and laboratory disposables.",
    highlights: ["BD & Polymed Syringes", "Nitrile Gloves & PPE Kits", "Laboratory Disposables"],
  },
  {
    id: "corporate-healthcare",
    name: "Corporate Healthcare & Wellness",
    iconIdentifier: "building-2",
    description: "First-aid medical stock, emergency trauma kits, and workplace occupational health supplies.",
    highlights: ["Industrial First-Aid Kits", "Emergency Trauma Stock", "Workplace Safety Equipment"],
  },
  {
    id: "pharmaceutical-companies",
    name: "Pharmaceutical Partners",
    iconIdentifier: "flask-conical",
    description: "Regional distribution support, cold-chain handling, and institutional supply chain logistics.",
    highlights: ["Cold-Chain Compliance", "Regional Warehouse Stocking", "MH Distribution Network"],
  },
  {
    id: "nursing-homes",
    name: "Nursing Homes & Rehab Centers",
    iconIdentifier: "bed",
    description: "Long-term patient care consumables, mobility aids, rehabilitation gear, and nursing supplies.",
    highlights: ["Walkers & Rehabilitation Gear", "Catheters & Drainage Sets", "Patient Care Disposables"],
  },
  {
    id: "healthcare-institutions",
    name: "Healthcare Institutions & NGO Tenders",
    iconIdentifier: "landmark",
    description: "Institutional supply contracts, bulk tender procurement, and structured distribution agreements.",
    highlights: ["Transparent Bulk Rates", "GST & License Compliant", "Dedicated Account Manager"],
  },
];
