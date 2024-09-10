import "../styles/buy-item.css";
import PropTypes from "prop-types";
import ItemQuantity from "./ItemQuantity";
import { useState } from "react";

const BuyItem = ({ item, handleAddToCart, handleBuyItem }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity >= 10) return;
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleQuantityInputChange = (event) => {
    event.target.reportValidity();
    setQuantity(parseInt(Number(event.target.value)));
  };

  return (
    <div className="buy-item">
      <ItemQuantity
        quantity={quantity}
        handleIncrement={incrementQuantity}
        handleDecrement={decrementQuantity}
        handleInputChange={handleQuantityInputChange}
      />
      <div className="buy-item__btns-wrapper">
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => {
            handleAddToCart(item, quantity);
          }}
        >
          Add to cart &middot; <span>${item.price.toFixed(2)}</span>
        </button>
        <button type="button" className="btn btn--cta" onClick={handleBuyItem}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

BuyItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleBuyItem: PropTypes.func.isRequired,
};

export default BuyItem;
