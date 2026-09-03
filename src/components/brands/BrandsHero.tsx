import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";

function BrandsHero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="site-container py-10 sm:py-12 lg:py-14">
        <p className="section-eyebrow text-teal-300">Brands &amp; products</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <h1 className="page-title">Trusted Healthcare Brands</h1>
            <p className="mt-4 max-w-lg text-[0.975rem] leading-7 text-slate-300 sm:text-base">
              Explore the healthcare brands associated with {business.name}&apos;s product supply.
            </p>
            <Link to="/contact" className="btn btn-primary mt-7">
              Send an Enquiry
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="border-t border-white/10 pt-5 lg:max-w-48 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-sm font-semibold tracking-tight text-white">{business.address.city}</p>
            <p className="mt-1 text-sm text-slate-400">
              {business.address.state}, {business.address.country}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandsHero;
