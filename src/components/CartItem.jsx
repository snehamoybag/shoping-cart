import "../styles/cart-item.css";
import "../styles/btn.css";
import placeholderImg from "../assets/images/f.png";
import ItemQuantity from "./ItemQuantity";
import Rating from "./Rating";
import ItemPrice from "./ItemPrice";

const CartItem = () => {
  const placeholderFunc = () => {};

  return (
    <div className="cart-item">
      <div className="cart-item__img-info-wrapper">
        <div className="cart-item__img-wrapper">
          <img
            src={placeholderImg}
            alt="item thumbnail"
            className="cart-item__img"
          />
          <ItemQuantity
            quantity={10}
            handleIncrement={placeholderFunc}
            handleDecrement={placeholderFunc}
            handleInputChange={placeholderFunc}
          />
        </div>
        <div className="cart-item__info-wrapper">
          <h2 className="cart-item__name">Item in cart</h2>
          <p className="cart-item__paragraph">Placeholder</p>
          <Rating rating={4} ratingCount={500} />
          <ItemPrice price={150} />
        </div>
      </div>
      <div className="cart-item__btns-wrapper">
        <button type="button" className="btn btn--outline">
          Remove Item
        </button>
        <button type="button" className="btn btn--outline">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartItem;
