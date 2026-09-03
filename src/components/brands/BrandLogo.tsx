import { useState } from "react";
import { findBrand, getBrandLabel, resolveBrand } from "../../data/brands";
import type { Brand } from "../../types";

export type BrandLogoSize = "sm" | "md" | "lg";
export type BrandLogoLayout = "stack" | "inline";

type BrandLogoProps = {
  name?: string;
  brand?: Brand;
  showName?: boolean;
  showSecondary?: boolean;
  size?: BrandLogoSize;
  layout?: BrandLogoLayout;
  className?: string;
};

function BrandLogo({
  name,
  brand: brandProp,
  showName = true,
  showSecondary = false,
  size = "md",
  layout = "stack",
  className = "",
}: BrandLogoProps) {
  const [logoFailed, setLogoFailed] = useState(false);
  const brand = brandProp ?? (name ? resolveBrand(name) : undefined);

  if (!brand) {
    return null;
  }

  if (brand.isCategory) {
    return (
      <span className={`brand-logo-root brand-logo-root--${layout} brand-logo-root--${size} ${className}`.trim()}>
        <span className="brand-logo-wordmark">{brand.name}</span>
      </span>
    );
  }

  const resolved = findBrand(brand.id) ?? brand;
  const label = getBrandLabel(resolved);
  const showLogo = Boolean(resolved.logo) && !logoFailed;

  return (
    <span className={`brand-logo-root brand-logo-root--${layout} brand-logo-root--${size} ${className}`.trim()}>
      <span className="brand-logo-frame">
        {showLogo ? (
          <img
            src={resolved.logo}
            alt={resolved.logoAlt ?? `${label} logo`}
            className={`brand-logo-mark ${resolved.logoOnDark ? "brand-logo-mark--on-dark" : ""}`}
            loading="lazy"
            decoding="async"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <span className="brand-logo-wordmark">{label}</span>
        )}
      </span>
      {showName && showLogo ? <span className="brand-logo-name">{label}</span> : null}
      {showSecondary && resolved.secondaryLabel ? (
        <span className="brand-logo-secondary">{resolved.secondaryLabel}</span>
      ) : null}
    </span>
  );
}

export default BrandLogo;
