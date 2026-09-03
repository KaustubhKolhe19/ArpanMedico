import type { Brand } from "../types";

export const brands: readonly Brand[] = [
  {
    id: "nipro",
    name: "Nipro",
    logo: "/assets/brands/nipro.png",
    logoAlt: "Nipro logo",
    website: "https://www.nipro.co.jp/en/",
    featured: true,
    logoOnDark: true,
  },
  {
    id: "johnson-johnson-ethicon",
    name: "Johnson & Johnson Ethicon",
    displayName: "Ethicon",
    secondaryLabel: "Johnson & Johnson",
    logo: "/assets/brands/ethicon.svg",
    logoAlt: "Ethicon logo",
    website: "https://www.ethicon.com/",
    featured: true,
  },
  {
    id: "polymed",
    name: "Polymed",
    logo: "/assets/brands/polymed.webp",
    logoAlt: "Polymed logo",
    website: "https://www.polymedicure.com/",
    featured: true,
  },
  {
    id: "bd",
    name: "BD",
    logo: "/assets/brands/bd.png",
    logoAlt: "BD logo",
    website: "https://www.bd.com/",
    featured: true,
  },
  {
    id: "hmd",
    name: "HMD",
  },
  {
    id: "romsons",
    name: "Romsons",
    logo: "/assets/brands/romsons.png",
    logoAlt: "Romsons logo",
    website: "https://romsons.com/",
    logoOnDark: true,
  },
  {
    id: "healthium",
    name: "Healthium",
    logo: "/assets/brands/healthium.png",
    logoAlt: "Healthium logo",
    website: "https://healthiummedtech.com/",
    logoOnDark: true,
  },
  {
    id: "nulife",
    name: "Nulife",
    logo: "/assets/brands/nulife.svg",
    logoAlt: "Nulife logo",
    website: "https://www.nulife.co.in/",
  },
  {
    id: "rehab",
    name: "Rehab",
  },
  {
    id: "walker-products",
    name: "Walker Products",
  },
  {
    id: "other-leading-mnc-healthcare-brands",
    name: "Other Leading MNC Healthcare Brands",
    isCategory: true,
  },
];

export const showcaseBrands = brands.filter((brand) => !brand.isCategory);
export const otherBrandsCategory = brands.find((brand) => brand.isCategory);
export const featuredShowcaseBrands = showcaseBrands.filter((brand) => brand.featured);
export const supportingShowcaseBrands = showcaseBrands.filter((brand) => !brand.featured);

const brandAliases: Record<string, string> = {
  nipro: "nipro",
  ethicon: "johnson-johnson-ethicon",
  "johnson & johnson ethicon": "johnson-johnson-ethicon",
  "johnson and johnson ethicon": "johnson-johnson-ethicon",
  polymed: "polymed",
  "poly medicure": "polymed",
  "poly medicure ltd": "polymed",
  bd: "bd",
  "becton dickinson": "bd",
  "becton, dickinson and company": "bd",
  "becton dickinson and company": "bd",
  hmd: "hmd",
  "hindustan syringes": "hmd",
  "hindustan syringes & medical devices": "hmd",
  romsons: "romsons",
  healthium: "healthium",
  "healthium medtech": "healthium",
  nulife: "nulife",
  rehab: "rehab",
  "walker products": "walker-products",
  "other leading mnc healthcare brands": "other-leading-mnc-healthcare-brands",
};

function normalizeBrandKey(value: string): string {
  return value.trim().toLowerCase().replace(/[.,]/g, " ").replace(/\s+/g, " ");
}

export function getBrandLabel(brand: Brand): string {
  return brand.displayName ?? brand.name;
}

export function findBrand(nameOrId: string): Brand | undefined {
  const normalized = normalizeBrandKey(nameOrId);
  const aliasedId = brandAliases[normalized];

  return brands.find((brand) => {
    if (aliasedId && brand.id === aliasedId) {
      return true;
    }

    return (
      brand.id === normalized ||
      normalizeBrandKey(brand.name) === normalized ||
      (brand.displayName ? normalizeBrandKey(brand.displayName) === normalized : false)
    );
  });
}

export function resolveBrand(nameOrId: string): Brand {
  return (
    findBrand(nameOrId) ?? {
      id: normalizeBrandKey(nameOrId).replace(/\s+/g, "-"),
      name: nameOrId.trim(),
    }
  );
}
