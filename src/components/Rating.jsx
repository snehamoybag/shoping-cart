import "../styles/rating.css";
import PropTypes from "prop-types";

const Rating = ({ rating, ratingCount }) => {
  const isCountAvailable = ratingCount !== undefined && ratingCount !== null;
  let ratingStyle = "";

  if (rating < 2) {
    ratingStyle = "bad";
  } else if (rating >= 2 && rating < 3.5) {
    ratingStyle = "decent";
  } else if (rating >= 3.5) {
    ratingStyle = "good";
  }

  return (
    <div className="rating">
      <p className={`rating__rate ${ratingStyle}`} data-testid="rating">
        <span className="sr-only">rating: </span>
        {rating.toFixed(1)}
        <span className="sr-only">stars</span>
      </p>
      {isCountAvailable && (
        <p className="rating__count" data-testid="rating-count">
          <span className="sr-only">rating count: </span>({ratingCount})
        </p>
      )}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number,
};

export default Rating;
