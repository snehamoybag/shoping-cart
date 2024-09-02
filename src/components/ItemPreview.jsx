import "../styles/sr-only.css";
import "../styles/item-preview.css";
import PropTypes from "prop-types";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import getTruncateString from "../utils/getTruncateString";

const ItemPreview = ({ item }) => {
  const { id, title, image, price, rating } = item;
  const itemPageLink = `item/${id}`;

  return (
    <div className="item-preview">
      <div className="item-preview__img-wrapper">
        <Link to={itemPageLink}>
          <img src={image} alt={title} className="item-preview__img" />
        </Link>
        <Rating rating={rating.rate} />
      </div>
      <Link to={itemPageLink}>
        <h2 className="item-preview__name">{getTruncateString(title, 30)}</h2>
      </Link>
      <div className="item-preview__price-wrapper">
        <p className="item-preview__discount-price">
          <span className="sr-only">Discount Price: </span>${price}
        </p>
        <p className="item-preview__original-price">
          <span className="sr-only">Original Price: </span>
          <s>${(price + 50).toFixed(2)}</s>
        </p>
      </div>
    </div>
  );
};

ItemPreview.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemPreview;
