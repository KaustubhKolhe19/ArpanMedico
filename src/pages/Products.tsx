import { Helmet } from "react-helmet-async";
import { ArrowRight, Hospital } from "lucide-react";
import { Link } from "react-router-dom";
import CategoryNavigation from "../components/products/CategoryNavigation";
import ProductCategorySection from "../components/products/ProductCategorySection";
import ProductEnquiryCTA from "../components/products/ProductEnquiryCTA";
import ProductsHero from "../components/products/ProductsHero";
import { productCategories } from "../data/products";
import { business } from "../data/business";

function Products() {
  const { address } = business;
  const pageTitle = "Medical, Surgical & Hospital Products | Arpan Medico Sangamner";
  const pageDescription = "Explore medical supplies, surgical supplies, hospital equipment and product categories from Arpan Medico in Sangamner.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Medical & Surgical Product Categories",
    numberOfItems: productCategories.length,
    itemListElement: productCategories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.name,
      description: category.description,
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

      <section className="bg-slate-950 py-10 text-white sm:py-12" aria-labelledby="hospital-setup-products-heading">
        <div className="site-container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex size-10 items-center justify-center rounded-xl border border-teal-500/20 bg-teal-500/10 text-teal-300">
              <Hospital size={21} aria-hidden="true" />
            </div>
            <h2 id="hospital-setup-products-heading" className="section-title mt-4 text-white">
              Planning a Hospital Setup?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
              Explore hospital beds, patient monitors, hospital equipment, machines, surgical equipment and other product requirements.
            </p>
          </div>
          <Link to="/hospital-setup" className="btn btn-primary shrink-0">
            Explore Hospital Setup
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <nav className="border-b border-slate-200 bg-white py-5" aria-label="Related healthcare pages">
        <div className="site-container flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          <Link to="/brands" className="btn-link">Healthcare brands <ArrowRight size={14} aria-hidden="true" /></Link>
          <Link to="/industries" className="btn-link">Industries served <ArrowRight size={14} aria-hidden="true" /></Link>
          <Link to="/contact" className="btn-link">Contact Arpan Medico <ArrowRight size={14} aria-hidden="true" /></Link>
        </div>
      </nav>
      <ProductEnquiryCTA />
    </>
  );
}

export default Products;
