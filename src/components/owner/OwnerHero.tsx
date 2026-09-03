import { owner } from "../../data/owner";
import PageHero from "../common/PageHero";

function OwnerHero() {
  return (
    <PageHero
      eyebrow="Meet the business owner"
      title={owner.name}
      subtitle={`${owner.designation} · ${owner.business}`}
      description={owner.introduction}
      locationLabel={owner.location.split(",")[0]}
      locationHint={owner.location.split(",").slice(1).join(",").trim()}
    />
  );
}

export default OwnerHero;
