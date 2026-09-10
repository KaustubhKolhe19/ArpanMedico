export type NavigationItem = {
  label: string;
  to: string;
};

export type Address = {
  line1: string;
  line2: string;
  landmark: string;
  street: string;
  city: string;
  postalCode: string;
  district: string;
  state: string;
  country: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  whatsapp: string;
  phoneNumbers: readonly string[];
  additionalPhoneNumbers: readonly string[];
};

export type BusinessInfo = {
  name: string;
  owner: string;
  description: string;
  introduction: readonly string[];
  categories: readonly string[];
  address: Address;
  location: string;
  contact: ContactInfo;
};

export type ProductCategoryId =
  | "medicines"
  | "surgical-products"
  | "instruments";

export type ProductItem = {
  id: string;
  name: string;
  category: ProductCategoryId;
  iconIdentifier?: string;
};

export type ProductCategory = {
  id: ProductCategoryId;
  name: string;
  iconIdentifier?: string;
  items: readonly ProductItem[];
};

export type Brand = {
  id: string;
  name: string;
  displayName?: string;
  secondaryLabel?: string;
  logo?: string;
  logoAlt?: string;
  website?: string;
  featured?: boolean;
  /** Category-style entry without a brand logo (e.g. other MNC brands). */
  isCategory?: boolean;
  /** Logo asset is designed for a dark plate; apply light-card blend treatment. */
  logoOnDark?: boolean;
};

export type Industry = {
  id: string;
  name: string;
  iconIdentifier: IndustryIconId;
};

export type IndustryIconId =
  | "hospital"
  | "stethoscope"
  | "pill"
  | "microscope"
  | "building-2"
  | "flask-conical"
  | "bed"
  | "landmark";

export type ContentItem = {
  id: string;
  name: string;
  iconIdentifier?: string;
};

export type OwnerProfile = {
  name: string;
  designation: string;
  business: string;
  location: string;
  phone: string;
  whatsapp: string;
  email: string;
  introduction: string;
  businessFocus: string;
  focusAreas: readonly string[];
  photo?: string;
  qualification?: string;
  experience?: string;
  message?: string;
};

export type {
  AnalyticsDemoData,
  AnalyticsKpi,
  AnalyticsKpiIcon,
  CategoryMetric,
  EnquiryMetric,
  IndustryMetric,
  MonthlyMetric,
} from "../data/analyticsDemo";
