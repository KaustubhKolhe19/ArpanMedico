type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleId?: string;
  description?: string;
  dark?: boolean;
};

function SectionHeader({ eyebrow, title, titleId, description, dark = false }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <p className={`section-eyebrow ${dark ? "text-teal-300" : "text-teal-700"}`}>{eyebrow}</p>
      <h2 id={titleId} className={`section-title ${dark ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {description ? (
        <p className={`body-copy mt-3 max-w-xl ${dark ? "text-slate-300" : ""}`}>{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
