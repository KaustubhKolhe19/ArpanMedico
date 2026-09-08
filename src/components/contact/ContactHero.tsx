import { MapPin } from "lucide-react";
import { business } from "../../data/business";

function ContactHero() {
  const { address } = business;

  return (
    <section className="bg-slate-950 text-white">
      <div className="site-container py-10 md:py-12 lg:py-14">
        <p className="section-eyebrow text-teal-300">Contact {business.name}</p>
        <div className="mt-4 grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12 lg:gap-16">
          <div className="min-w-0 max-w-3xl">
            <h1 className="text-[2.25rem] font-semibold leading-[1.12] tracking-[-0.028em] text-balance break-words hyphens-none sm:text-[2.5rem] md:text-[2.875rem] lg:text-[3.5rem]">
              Let's talk about your
              <span className="block">healthcare supply requirements.</span>
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
              Send an enquiry, call our team, or visit {business.name} in {address.city}.
            </p>
          </div>
          <div className="flex max-w-full items-start gap-3 border-t border-white/10 pt-5 md:max-w-52 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <MapPin size={16} className="mt-0.5 shrink-0 text-teal-300" aria-hidden="true" />
            <div className="min-w-0">
              <p className="section-eyebrow text-slate-400">Location</p>
              <p className="mt-2 text-base font-semibold tracking-tight">{address.city}</p>
              <p className="mt-1 text-sm leading-5 text-slate-400">
                {address.state}, {address.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
