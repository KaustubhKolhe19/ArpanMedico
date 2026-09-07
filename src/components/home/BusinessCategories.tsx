<<<<<<< HEAD
import { FlaskConical, Package, Stethoscope } from "lucide-react";
=======
import { ArrowRight, Box, FlaskConical, Package, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
>>>>>>> f3cc38868324baac2ebe902eb24138614a520ab5
import { business } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";

<<<<<<< HEAD
const categoryIcons = [Package, FlaskConical, Stethoscope];

function BusinessCategories() {
  return (
    <section className="bg-slate-50 section-pad" aria-labelledby="categories-heading">
      <div className="site-container grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
        <div>
          <p className="section-eyebrow text-teal-700">What we do</p>
          <h2 id="categories-heading" className="section-title text-slate-950">
            Business categories
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
            <span className="block font-semibold text-slate-700">Wholesale Medical &amp; Surgical Supply</span>
            Medicines, surgical products and instruments supplied for hospitals, clinics, pharmacies and healthcare organizations.
=======
const categoryDetails = [
  {
    id: "wholesale",
    name: "Wholesale Distribution",
    icon: Package,
    description: "Direct wholesale bulk supply for hospitals, pharmacies, clinics, and medical institutions with competitive pricing.",
    highlights: ["Bulk B2B Discounts", "Same-Day Dispatch", "Verified Invoices"],
  },
  {
    id: "medicine",
    name: "Medicines & IV Fluids",
    icon: FlaskConical,
    description: "Prescription medicines, emergency drugs, OTC products, IV fluids, and injectable pharmaceuticals.",
    highlights: ["MNC Pharmaceutical Brands", "Temperature Controlled Storage", "Genuine Formulations"],
  },
  {
    id: "surgical",
    name: "Surgical Products",
    icon: Stethoscope,
    description: "Authentic surgical gloves, sutures, dressing materials, syringes, cannulas, catheters, and surgical caps.",
    highlights: ["Ethicon & Nipro Authorized", "Sterile Packaging", "Complete Surgical Range"],
  },
  {
    id: "instrument",
    name: "Medical Equipment & Instruments",
    icon: Box,
    description: "Hospital consumables, diagnostic equipment, surgical instruments, rehabilitation walkers, and hospital furniture.",
    highlights: ["Precision Instruments", "Hospital Consumables", "Durable Equipment"],
  },
];

function BusinessCategories() {
  return (
    <section className="bg-slate-50/70 section-pad border-y border-slate-200/60" aria-labelledby="categories-heading">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end">
          <div>
            <span className="section-eyebrow text-teal-700">What We Do</span>
            <h2 id="categories-heading" className="section-title mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Comprehensive Healthcare Supply Categories
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            {business.name} specializes in four core business categories delivering authentic medical products across Maharashtra.
>>>>>>> f3cc38868324baac2ebe902eb24138614a520ab5
          </p>
          <ul className="mt-8 grid border-y border-slate-200">
            {business.categories.map((category, index) => {
              const Icon = categoryIcons[index];
              return (
                <li key={category} className="flex items-center gap-4 border-b border-slate-200 py-4 last:border-b-0">
                  <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-teal-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon size={17} className="text-teal-700" aria-hidden="true" />
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">{displayCategory(category)}</h3>
                </li>
              );
            })}
          </ul>
        </div>
<<<<<<< HEAD
        <img
          src="https://images.unsplash.com/photo-1561328165-f0b762a9508e?auto=format&fit=crop&w=1200&q=85"
          alt="Medical and surgical supplies arranged in a professional healthcare setting"
          className="h-[260px] w-full max-w-[500px] justify-self-start rounded-2xl border border-slate-200 object-cover shadow-[0_6px_18px_rgb(15_23_42/0.05)] sm:h-[320px] lg:justify-self-end"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
=======

        {/* 4-Card Category Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoryDetails.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/50 hover:shadow-xl"
              >
                <div>
                  {/* Category Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition duration-300 group-hover:bg-teal-700 group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-950 group-hover:text-teal-800">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {cat.description}
                  </p>

                  {/* Key Feature Tags */}
                  <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                    {cat.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[0.75rem] font-medium text-slate-700">
                        <span className="size-1.5 rounded-full bg-teal-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <a
                    href={createWhatsAppUrl(`Hello Arpan Medico, I have a requirement regarding ${cat.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 transition hover:text-teal-900"
                  >
                    Enquire for {cat.name.split(" ")[0]}
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Catalog CTA Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-teal-200/60 bg-teal-900 text-white p-5 sm:flex-row sm:px-8">
          <div>
            <p className="text-sm font-semibold text-teal-100">Need specific medical products or surgical brands?</p>
            <p className="text-xs text-teal-200/80">Explore our full categorized medical &amp; surgical product catalog.</p>
          </div>
          <Link to="/products" className="btn btn-on-dark shrink-0 text-xs font-semibold shadow-md">
            View All Product Categories
            <ArrowRight size={15} />
          </Link>
        </div>
>>>>>>> f3cc38868324baac2ebe902eb24138614a520ab5
      </div>
    </section>
  );
}

export default BusinessCategories;
