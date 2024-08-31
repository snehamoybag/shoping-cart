import "../styles/rating.css";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  return (
    <p className="rating">
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
