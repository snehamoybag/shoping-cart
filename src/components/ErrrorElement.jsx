import "../styles/error-page.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ErrorElement = ({
  heading,
  description,
  returnLink = "/",
  returnLinkText = "Return to Homepage",
}) => {
  return (
    <main className="error-page">
      <div className="error-page__content">
        <h1 className="error-page__title">{heading}</h1>
        <p className="error-page__paragraph">{description}</p>
        <Link to={returnLink} className="error-page__link">
          {returnLinkText}
        </Link>
      </div>
    </main>
  );
};

ErrorElement.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  returnLink: PropTypes.string,
  returnLinkText: PropTypes.string,
};

export default ErrorElement;
