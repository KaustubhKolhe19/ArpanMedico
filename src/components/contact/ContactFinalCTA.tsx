import { business } from "../../data/business";
import ContactActions from "./ContactActions";

function ContactFinalCTA() {
  return (
    <section className="bg-slate-950 text-white" aria-labelledby="contact-final-cta-heading">
      <div className="site-container flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:gap-12 md:py-20 lg:py-[5.5rem]">
        <div className="min-w-0 max-w-2xl">
          <p className="section-eyebrow text-teal-300">Ready to discuss your requirement?</p>
          <h2
            id="contact-final-cta-heading"
            className="mt-2 text-[1.875rem] font-semibold leading-[1.2] tracking-[-0.022em] text-balance md:text-[2.25rem] lg:text-[2.5rem]"
          >
            Let's make your next
            <span className="block">medical supply requirement easier.</span>
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
            Share your requirement with {business.name} and connect with our team.
          </p>
        </div>
        <div className="shrink-0">
          <ContactActions callClassName="btn border border-slate-200 bg-white text-slate-800 hover:border-teal-700 hover:text-teal-800" />
        </div>
      </div>
    </section>
  );
}

export default ContactFinalCTA;
