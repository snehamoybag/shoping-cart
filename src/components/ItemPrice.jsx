import "../styles/item-price.css";
import "../styles/sr-only.css";

import PropTypes from "prop-types";

const ItemPrice = ({ price }) => {
  return (
    <p className="item-price">
      <span className="sr-only">Price: </span>${price}
    </p>
  );
};

ItemPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default ItemPrice;
