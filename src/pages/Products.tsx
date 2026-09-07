import { ArrowUpRight, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CategoryNavigation from "../components/products/CategoryNavigation";
import ProductCategorySection from "../components/products/ProductCategorySection";
import ProductEnquiryCTA from "../components/products/ProductEnquiryCTA";
import ProductsHero from "../components/products/ProductsHero";
import { CONTACT_GOOGLE_MAPS_URL } from "../components/contact/contactMaps";
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
        <link rel="canonical" href="/products" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/products" />
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

      <section className="bg-white" aria-labelledby="products-location-heading">
        <div className="site-container grid gap-6 border-y border-slate-200 py-10 md:grid-cols-[0.85fr_1.15fr] md:items-start md:gap-12 lg:py-12">
          <div>
            <p className="section-eyebrow text-teal-700">Local context</p>
            <h2 id="products-location-heading" className="section-title text-slate-950">
              {business.name} in {address.city}
            </h2>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
              <MapPin size={15} className="text-teal-700" aria-hidden="true" />
              {address.city}, {address.state}
            </p>
          </div>
          <div className="flex justify-end sm:items-end">
            <a href={CONTACT_GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary shrink-0">
              Get Directions
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <ProductEnquiryCTA />
    </>
  );
}

export default Products;
