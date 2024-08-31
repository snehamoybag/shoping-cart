import "../styles/sr-only.css";
import "../styles/item-preview.css";
import PropTypes from "prop-types";
import Rating from "./Rating";

const ItemPreview = ({ imgUrl, name, rating, price }) => {
  return (
    <div className="item-preview">
      <div className="item-preview__img-wrapper">
        <img src={imgUrl} alt={name} className="item-preview__img" />
        <Rating rating={rating} />
      </div>
      <div className="item-preview__text-wrapper">
        <h2 className="item-preview__name">{name}</h2>
        <div className="item-preview__price-wrapper">
          <p className="item-preview__discount-price">
            <span className="sr-only">Discount Price: </span>${price}
          </p>
          <p className="item-preview__original-price">
            <span className="sr-only">Original Price: </span>
            <s>${price + 50}</s>
          </p>
        </div>
      </div>
    </div>
  );
};

ItemPreview.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemPreview;
