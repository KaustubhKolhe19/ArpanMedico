import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";

function BusinessIntro() {
  return (
    <section className="bg-white section-pad">
      <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
        <div>
          <p className="section-eyebrow text-teal-700">About the business</p>
          <h2 className="section-title max-w-md text-slate-950">Surgical, Medical &amp; Hospital Supplies</h2>
          <img
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=85"
            alt="Professionally arranged medical supplies"
            className="mt-6 h-[190px] w-full max-w-[340px] rounded-xl border border-slate-200 object-cover shadow-[0_4px_14px_rgb(15_23_42/0.05)]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="lg:pt-0.5">
          <p className="body-copy">{business.introduction[0]}</p>
          <dl className="mt-7 grid max-w-xl gap-5 border-t border-slate-200 pt-5 sm:grid-cols-3">
            <div>
              <dt className="section-eyebrow text-teal-700">Business</dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-slate-700">{business.description}</dd>
            </div>
            <div>
              <dt className="section-eyebrow text-teal-700">Location</dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-slate-700">
                {business.address.city}, {business.address.state}
              </dd>
            </div>
            <div>
              <dt className="section-eyebrow text-teal-700">Leadership</dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-slate-700">{business.owner}</dd>
            </div>
          </dl>
          <Link to="/about" className="btn-link mt-6">
            About {business.name}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BusinessIntro;