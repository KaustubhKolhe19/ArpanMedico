import { ArrowRight } from "lucide-react";
import { business } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import PageHero from "../common/PageHero";

function ProductsHero() {
  return (
    <PageHero
      eyebrow="Products & supplies"
      title="Medical, Surgical & Healthcare Supplies"
      description={`Explore the product categories associated with ${business.name}'s business.`}
      action={
        <a
          href={createWhatsAppUrl(`Hello ${business.name}, I would like to enquire about your products.`)}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Enquire on WhatsApp
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      }
      locationLabel={business.address.city}
      locationHint={`${business.address.state}, ${business.address.country}`}
    />
  );
}

export default ProductsHero;
