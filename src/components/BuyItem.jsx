import "../styles/buy-item.css";
import PropTypes from "prop-types";
import ItemQuantity from "./ItemQuantity";

const BuyItem = ({ price }) => {
  return (
    <div className="buy-item">
      <ItemQuantity
        quantity={1}
        handleIncrement={() => {}}
        handleDecrement={() => {}}
        handleInputChange={() => {}}
      />
      <div className="buy-item__btns-wrapper">
        <button className="btn btn--outline">
          Add to cart &middot; <span>${price.toFixed(2)}</span>
        </button>
        <button className="btn btn--cta">Buy Now</button>
      </div>
    </div>
  );
};

BuyItem.propTypes = {
  price: PropTypes.number.isRequired,
};

export default BuyItem;
