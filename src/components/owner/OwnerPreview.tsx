import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { owner } from "../../data/owner";
import OwnerPortrait from "./OwnerPortrait";

function OwnerPreview() {
  return (
    <section className="bg-white section-pad" aria-labelledby="owner-preview-heading">
      <div className="site-container grid items-center gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1.62fr)] lg:gap-14">
        <OwnerPortrait compact />
        <div>
          <p className="section-eyebrow text-teal-700">Meet the business owner</p>
          <h2 id="owner-preview-heading" className="section-title text-slate-950">
            {owner.name}
          </h2>
          <p className="mt-2 text-sm font-medium text-slate-600">
            {owner.designation} · {owner.business}
          </p>
          <p className="body-copy mt-4">{owner.introduction}</p>
          <p className="mt-3 text-sm text-slate-500">{owner.location}</p>
          <Link to="/about-owner" className="btn-link mt-5">
            View Profile
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OwnerPreview;
