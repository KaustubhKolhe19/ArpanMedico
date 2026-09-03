import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";
import PageHero from "../common/PageHero";

function AboutHero() {
  return (
    <PageHero
      eyebrow="About Arpan Medico"
      title={business.name}
      description={`${business.description} in ${business.address.city}`}
      action={
        <Link to="/contact" className="btn btn-primary">
          Contact {business.name}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      }
      locationLabel={business.address.city}
      locationHint={`${business.address.state}, ${business.address.country}`}
    />
  );
}

export default AboutHero;
