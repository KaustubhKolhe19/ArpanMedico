import { Helmet } from "react-helmet-async";
import CategoryNavigation from "../components/products/CategoryNavigation";
import ProductCategorySection from "../components/products/ProductCategorySection";
import ProductEnquiryCTA from "../components/products/ProductEnquiryCTA";
import ProductsHero from "../components/products/ProductsHero";
import { productCategories } from "../data/products";
import { business } from "../data/business";

function Products() {
  const { address } = business;
  const pageTitle = "Medical & Surgical Products | Arpan Medico Sangamner";
  const pageDescription = "Explore medical, surgical and healthcare supply categories associated with Arpan Medico in Sangamner.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Medical & Surgical Product Categories",
    numberOfItems: productCategories.length,
    itemListElement: productCategories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.name,
      description: `Supplies including ${category.items.map((item) => item.name).join(", ")}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://arpanmedico.com/products" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arpanmedico.com/products" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content={`${address.city}, ${address.state}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <ProductsHero />
      <CategoryNavigation />
      {productCategories.map((category, index) => (
        <ProductCategorySection key={category.id} category={category} index={index} />
      ))}

      <ProductEnquiryCTA />
    </>
  );
}

export default Products;
