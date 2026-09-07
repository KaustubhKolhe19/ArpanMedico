import { Mail, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import AboutHero from "../components/about/AboutHero";
import BusinessOverview from "../components/about/BusinessOverview";
import LocalPresence from "../components/about/LocalPresence";
import EnquiryCTA from "../components/common/EnquiryCTA";
import { business } from "../data/business";
import { industries } from "../data/industries";
import { specialties } from "../data/specialties";
import { strengths } from "../data/strengths";
import { whyChooseUs } from "../data/whyChooseUs";
import OwnerProfileSection from "../components/owner/OwnerProfileSection";
import { phoneHref } from "../lib/display";

function About() {
  const { address, contact } = business;
  const pageTitle = `${business.name} in ${address.city} | About`;
  const pageDescription = `${business.name} in ${address.city}, ${address.state}, with wholesale supply of medicines, surgical products and instruments.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="/about" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/about" />
      </Helmet>

      <AboutHero />
      <OwnerProfileSection compact />

      <section className="bg-white section-pad" aria-labelledby="company-introduction-heading">
        <div className="site-container grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center lg:gap-16">
          <img
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=85"
            alt="Professionally arranged medical supplies"
            className="h-[300px] w-full rounded-2xl border border-slate-200 object-cover shadow-[0_8px_24px_rgb(15_23_42/0.06)] sm:h-[360px] lg:h-[500px]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="max-w-2xl">
            <p className="section-eyebrow text-teal-700">Company introduction</p>
            <h2 id="company-introduction-heading" className="section-title text-slate-950">
              {business.description}
            </h2>
            <p className="mt-3 text-sm font-medium text-slate-500">Under the leadership of {business.owner}.</p>
            <div className="mt-6 space-y-5">
              {business.introduction.map((paragraph) => (
                <p key={paragraph} className="body-copy">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BusinessOverview />
      <ContentList title="Our Specialities" items={specialties} columns={2} muted />
      <ContentList title="Our Strength" items={strengths} featuredCount={4} />
      <ContentList title="Why Choose Us" items={whyChooseUs} numbered muted />
      <ContentList title="Industries We Serve" items={industries} compact />
      <LocalPresence />

      <section className="bg-slate-50" aria-labelledby="about-contact-heading">
        <div className="site-container grid gap-8 border-t border-slate-200 py-10 md:grid-cols-2 lg:py-12">
          <div>
            <p className="section-eyebrow text-teal-700">Contact information</p>
            <h2 id="about-contact-heading" className="section-title text-slate-950">
              Connect with {business.name}.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <a
              href={`mailto:${contact.email}`}
              className="text-sm font-medium text-slate-700 transition hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
            >
              <Mail size={15} className="text-teal-700" aria-hidden="true" />
              <span className="section-eyebrow mt-3 block text-slate-400">Email</span>
              <span className="mt-2 block break-words">{contact.email}</span>
            </a>
            <div>
              <Phone size={15} className="text-teal-700" aria-hidden="true" />
              <span className="section-eyebrow mt-3 block text-slate-400">Phone</span>
              <div className="mt-2 grid gap-1.5">
                {contact.phoneNumbers.map((phoneNumber) => (
                  <a
                    key={phoneNumber}
                    href={phoneHref(phoneNumber)}
                    className="block text-sm font-medium text-slate-700 transition hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  >
                    {phoneNumber}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA
        eyebrow="Enquiries"
        title="Have an enquiry?"
        description={`Contact ${business.name} in ${address.city}.`}
        contactLink
        showCall={false}
      />
    </>
  );
}

type ContentListProps = {
  title: string;
  items: readonly { id: string; name: string }[];
  muted?: boolean;
  columns?: 1 | 2;
  numbered?: boolean;
  featuredCount?: number;
  compact?: boolean;
};

function ContentList({ title, items, muted = false, columns = 1, numbered = false, featuredCount, compact = false }: ContentListProps) {
  const headingId = `${title.toLowerCase().replace(/\s+/g, "-")}-heading`;
  const featured = featuredCount ? items.slice(0, featuredCount) : items;
  const supporting = featuredCount ? items.slice(featuredCount) : [];

  return (
    <section className={`${muted ? "bg-slate-50" : "bg-white"} section-pad`} aria-labelledby={headingId}>
      <div className="site-container">
        <p className="section-eyebrow text-teal-700">Arpan Medico</p>
        <h2 id={headingId} className="section-title text-slate-950">
          {title}
        </h2>
        {compact ? (
          <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-slate-200 pt-5">
            {items.map((item) => (
              <li key={item.id} className="text-sm font-medium text-slate-700">
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <>
            <ul className={`mt-5 ${columns === 2 ? "grid sm:grid-cols-2 sm:gap-x-12" : "divide-y divide-slate-200 border-y border-slate-200"}`}>
              {featured.map((item, index) => (
                <li
                  key={item.id}
                  className={`flex items-baseline gap-4 py-3 text-sm font-medium leading-6 text-slate-700 ${columns === 2 ? "border-t border-slate-200" : ""}`}
                >
                  {numbered ? (
                    <span className="w-6 shrink-0 text-[0.7rem] font-semibold tracking-[0.12em] text-teal-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  ) : (
                    <span className="size-1.5 shrink-0 bg-teal-600" aria-hidden="true" />
                  )}
                  {item.name}
                </li>
              ))}
            </ul>
            {supporting.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2.5 text-sm text-slate-500">
                {supporting.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}

export default About;
