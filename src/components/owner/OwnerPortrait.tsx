import { owner } from "../../data/owner";

type OwnerPortraitProps = {
  compact?: boolean;
};

function OwnerPortrait({ compact = false }: OwnerPortraitProps) {
  return (
    <figure
      className={`w-full overflow-hidden rounded-[0.875rem] border border-slate-200 bg-slate-100 shadow-[0_1px_2px_rgb(15_23_42/0.04),0_8px_20px_rgb(15_23_42/0.06)] ${
        compact ? "max-w-[15.5rem]" : "max-w-[17.5rem]"
      }`}
    >
      <img
        src={owner.photo}
        alt={`${owner.name}, Business Owner of Arpan Medico`}
        width={560}
        height={700}
        className="aspect-[4/5] h-auto w-full object-cover object-[center_18%]"
        decoding="async"
      />
    </figure>
  );
}

export default OwnerPortrait;
