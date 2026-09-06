import { ArrowRight, Building2, MapPin, ShieldCheck, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../../data/business";

function BusinessIntro() {
  return (
    <section className="bg-white section-pad">
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16">
        {/* Left Column: Heading & Highlight Card */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 border border-teal-200/60">
            <Building2 size={14} className="text-teal-700" />
            <span>About the Business</span>
          </div>

          <h2 className="section-title mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Reliable Wholesale Medical &amp; Surgical Distributor.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Under the leadership of <strong className="font-semibold text-slate-900">{business.owner}</strong>, {business.name} is dedicated to providing genuine MNC healthcare supplies, competitive wholesale pricing, and rapid order dispatch.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Link to="/about" className="btn btn-primary shadow-sm">
              Read Our Full Story
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Highlight Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Card 1: Core Business */}
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-5 transition duration-200 hover:border-teal-500/40 hover:bg-white hover:shadow-md">
            <div className="flex size-10 items-center justify-center rounded-lg bg-teal-600 text-white shadow-sm">
              <ShieldCheck size={20} />
            </div>
            <h3 className="mt-4 text-xs font-bold uppercase tracking-wider text-teal-800">Business Focus</h3>
            <p className="mt-1.5 text-sm font-semibold leading-5 text-slate-900">{business.description}</p>
            <p className="mt-2 text-xs text-slate-500">100% genuine products with full quality assurance.</p>
          </div>

          {/* Card 2: Hub Location */}
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-5 transition duration-200 hover:border-teal-500/40 hover:bg-white hover:shadow-md">
            <div className="flex size-10 items-center justify-center rounded-lg bg-teal-600 text-white shadow-sm">
              <MapPin size={20} />
            </div>
            <h3 className="mt-4 text-xs font-bold uppercase tracking-wider text-teal-800">Location Hub</h3>
            <p className="mt-1.5 text-sm font-semibold leading-5 text-slate-900">{business.address.city}, {business.address.state}</p>
            <p className="mt-2 text-xs text-slate-500">{business.address.landmark}, {business.address.street}</p>
          </div>

          {/* Card 3: Leadership */}
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-5 transition duration-200 hover:border-teal-500/40 hover:bg-white hover:shadow-md">
            <div className="flex size-10 items-center justify-center rounded-lg bg-teal-600 text-white shadow-sm">
              <UserCheck size={20} />
            </div>
            <h3 className="mt-4 text-xs font-bold uppercase tracking-wider text-teal-800">Leadership</h3>
            <p className="mt-1.5 text-sm font-semibold leading-5 text-slate-900">{business.owner}</p>
            <p className="mt-2 text-xs text-slate-500">Business Owner &amp; Healthcare Operations Lead.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessIntro;
