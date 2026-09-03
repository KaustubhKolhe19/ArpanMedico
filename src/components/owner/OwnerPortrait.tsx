import { useState } from "react";
import { owner } from "../../data/owner";

type OwnerPortraitProps = {
  compact?: boolean;
};

function OwnerPortrait({ compact = false }: OwnerPortraitProps) {
  const profilePhoto = owner.photo ?? "/images/business/owner/milan-pradip-fargade.webp";
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <div
      className={`w-full overflow-hidden bg-slate-950 text-white ${compact ? "max-w-[15.5rem]" : "max-w-[17.5rem]"}`}
    >
      {hasPhoto ? (
        <img
          src={profilePhoto}
          alt={`${owner.name} - ${owner.designation}, ${owner.business}`}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] h-full w-full object-cover"
          onError={() => setHasPhoto(false)}
        />
      ) : (
        <div
          className="flex aspect-[4/5] flex-col justify-between border border-white/10 p-6 sm:p-7"
          aria-hidden="true"
        >
          <div>
            <p className="section-eyebrow text-teal-300">{owner.designation}</p>
            <span className="mt-5 block h-px w-8 bg-teal-600" />
          </div>
          <div>
            <p className="text-[2.35rem] font-semibold leading-none tracking-[0.28em] text-teal-200 sm:text-[2.6rem]">
              MPF
            </p>
            <p className="mt-5 text-sm font-medium leading-6 text-white">{owner.name}</p>
            <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
              {owner.business}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OwnerPortrait;
