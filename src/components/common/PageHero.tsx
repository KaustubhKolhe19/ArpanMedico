import { MapPin } from "lucide-react";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  action?: ReactNode;
  locationLabel?: string;
  locationHint?: string;
};

function PageHero({ eyebrow, title, subtitle, description, action, locationLabel, locationHint }: PageHeroProps) {
  return (
    <section className="bg-slate-950 text-white">
      <div className="site-container hero-pad">
        <p className="section-eyebrow text-teal-300">{eyebrow}</p>
        <div className="mt-4 grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="max-w-3xl">
            <h1 className="page-title">{title}</h1>
            {subtitle ? <p className="mt-3 text-sm font-medium text-teal-100 sm:text-base">{subtitle}</p> : null}
            <p className="mt-4 max-w-lg text-[0.975rem] leading-7 text-slate-300 sm:text-base sm:leading-7">
              {description}
            </p>
            {action ? <div className="mt-7">{action}</div> : null}
          </div>
          {locationLabel ? (
            <div className="flex items-start gap-3 border-t border-white/10 pt-5 lg:max-w-56 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <MapPin size={16} className="mt-0.5 shrink-0 text-teal-300" aria-hidden="true" />
              <div>
                <p className="text-base font-semibold tracking-tight">{locationLabel}</p>
                {locationHint ? <p className="mt-1 text-sm leading-5 text-slate-400">{locationHint}</p> : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
