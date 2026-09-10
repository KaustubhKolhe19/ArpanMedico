import { business } from "../../data/business";

function BrandIntro() {
  return (
    <section className="bg-white section-pad" aria-labelledby="brand-information-heading">
      <div className="site-container grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16 lg:pb-12">
        <div>
          <p className="section-eyebrow text-teal-700">Brand Portfolio</p>
          <h2 id="brand-information-heading" className="section-title text-slate-950">
            Trusted Leaders in Healthcare Supply.
          </h2>
        </div>
        <p className="body-copy lg:pt-8">
          {business.name} is an authorized distributor and wholesale supplier of premier multinational pharmaceuticals, sterile surgical consumables, IV therapy solutions, and medical equipment. We partner with world-leading healthcare manufacturers to guarantee 100% authentic products for hospitals, clinics, and pharmacies.
        </p>
      </div>
    </section>
  );
}

export default BrandIntro;
