import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";

function NotFound() {
  return (
    <>
    <Helmet>
      <title>Page Not Found | Arpan Medico</title>
      <meta name="robots" content="noindex,nofollow" />
    </Helmet>
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
    </>
  );
}

export default NotFound;
