import "../styles/cart-item.css";
import "../styles/btn.css";
import PropTypes from "prop-types";
import ItemQuantity from "./ItemQuantity";
import Rating from "./Rating";
import ItemPrice from "./ItemPrice";

const CartItem = ({ item, quantity, handleRemoveItem }) => {
  const { id, image, title, category, rating, price } = item;

  const placeholderFunc = () => {};

  return (
    <div className="cart-item">
      <div className="cart-item__img-info-wrapper">
        <div className="cart-item__img-wrapper">
          <img src={image} alt={title} className="cart-item__img" />
          <ItemQuantity
            quantity={quantity}
            handleIncrement={placeholderFunc}
            handleDecrement={placeholderFunc}
            handleInputChange={placeholderFunc}
          />
        </div>
        <div className="cart-item__info-wrapper">
          <h2 className="cart-item__name">{title}</h2>
          <p className="cart-item__paragraph">{category}</p>
          <Rating rating={rating.rate} ratingCount={rating.count} />
          <ItemPrice price={price} />
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
  handleRemoveItem: PropTypes.func.isRequired,
};

export default CartItem;
