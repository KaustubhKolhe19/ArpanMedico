import BrandLogo from "./BrandLogo";
import type { Brand } from "../../types";

type BrandCardProps = {
  brand: Brand;
  featured?: boolean;
};

function BrandCard({ brand, featured = false }: BrandCardProps) {
  return (
    <article className={`brand-card ${featured ? "brand-card--featured" : ""}`}>
      <BrandLogo
        brand={brand}
        size={featured ? "lg" : "md"}
        showName
        showSecondary={Boolean(brand.secondaryLabel)}
      />
    </article>
  );
}

export default BrandCard;
