import "../styles/rating.css";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  let ratingStyle = "";

  if (rating < 2) {
    ratingStyle = "bad";
  } else if (rating >= 2 && rating < 3.5) {
    ratingStyle = "decent";
  } else if (rating >= 3.5) {
    ratingStyle = "good";
  }

  return (
    <p className={`rating ${ratingStyle}`}>
      <span className="sr-only">rating: </span>
      {rating.toFixed(1)}
      <span className="sr-only">stars</span>
    </p>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
