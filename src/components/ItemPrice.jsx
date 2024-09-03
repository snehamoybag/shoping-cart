import "../styles/item-price.css";
import "../styles/sr-only.css";

import PropTypes from "prop-types";

const ItemPrice = ({ price }) => {
  return (
    <div className="item-price">
      <p className="item-price__discount">
        <span className="sr-only">Discount Price: </span>${price}
      </p>
      <p className="item-price__original">
        <span className="sr-only">Original Price: </span>
        <s>${(price + 50).toFixed(2)}</s>
      </p>
    </div>
  );
};

ItemPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default ItemPrice;
