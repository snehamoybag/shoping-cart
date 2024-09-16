import "../styles/cart-item.css";
import "../styles/btn.css";
import PropTypes from "prop-types";
import ItemQuantity from "./ItemQuantity";
import Rating from "./Rating";
import { useState } from "react";

const CartItem = ({ item, quantity, updateItemQuantity, handleRemoveItem }) => {
  const { id, image, title, category, rating, price } = item;

  // initializes state once when component is first mounted,
  // so state doesn't get effected even when quantity changes later on
  // ** this is an anti-pattern **
  // TODO: find a better solution
  const [quantityInputValue, setQuantityInputValue] = useState(quantity);

  const incrementQuantity = () => {
    if (quantityInputValue >= 10) return;
    setQuantityInputValue((prevValue) => prevValue + 1);
    updateItemQuantity(id, quantityInputValue + 1);
  };

  const decrementQuantity = () => {
    if (quantityInputValue <= 1) return;
    setQuantityInputValue((prevValue) => prevValue - 1);
    updateItemQuantity(id, quantityInputValue - 1);
  };

  const handleQuantityInputChange = (event) => {
    const value = parseInt(Number(event.target.value));
    const isValid = event.target.reportValidity();

    setQuantityInputValue(value);

    if (isValid) {
      updateItemQuantity(id, value);
    }
  };

  const totalPrice = (price * quantity).toFixed(2);

  return (
    <div className="cart-item">
      <div className="cart-item__img-info-wrapper">
        <div className="cart-item__img-wrapper">
          <img src={image} alt={title} className="cart-item__img" />
          <ItemQuantity
            quantity={quantityInputValue}
            handleIncrement={incrementQuantity}
            handleDecrement={decrementQuantity}
            handleInputChange={handleQuantityInputChange}
          />
        </div>
        <div className="cart-item__info-wrapper">
          <h2 className="cart-item__name">{title}</h2>
          <p className="cart-item__paragraph">{category}</p>
          <Rating rating={rating.rate} ratingCount={rating.count} />
          <p className="cart-item__paragraph" data-testid="cart-item-quantity">
            Quantity: {quantity}
          </p>
          <p
            className="cart-item__paragraph price"
            data-testid="cart-item-price"
          >
            Total Price: <span>${totalPrice}</span>
          </p>
        </div>
      </div>
      <div className="cart-item__btns-wrapper">
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => handleRemoveItem(item.id)}
        >
          Remove Item
        </button>
        <button type="button" className="btn btn--outline">
          Buy Now
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  updateItemQuantity: PropTypes.func,
  handleRemoveItem: PropTypes.func,
};

export default CartItem;
