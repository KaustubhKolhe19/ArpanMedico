import { business } from "../../data/business";

function BrandIntro() {
  return (
    <section className="bg-white section-pad" aria-labelledby="brand-information-heading">
      <div className="site-container grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16 lg:pb-12">
        <div>
          <p className="section-eyebrow text-teal-700">Brand information</p>
          <h2 id="brand-information-heading" className="section-title text-slate-950">
            Trusted names in healthcare supply.
          </h2>
        </div>
        <p className="body-copy lg:pt-8">
          {business.name} provides access to a range of medical, surgical and healthcare products
          associated with the listed brands. The brand information shown on this page has been
          confirmed by the client.
        </p>
      </div>
    </section>
  );
}

export default BrandIntro;
