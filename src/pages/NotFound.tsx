import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";

function NotFound() {
  return (
    <PageHero
      eyebrow="404 error"
      title="Page not found."
      description="The page you are looking for may have moved or no longer be available."
      action={
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      }
    />
  );
}

export default NotFound;
