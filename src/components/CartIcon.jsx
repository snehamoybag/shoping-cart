import "../styles/cart-icon.css";
import "../styles/sr-only.css";
import PropTypes from "prop-types";

const CartIcon = ({ numOfItems = 0 }) => {
  return (
    <div className="cart-icon">
      <p className="sr-only">shopping cart</p>
      {numOfItems > 0 && (
        <p
          className="cart-icon__number"
          aria-live="polite"
          data-testid="number-of-cart-items"
        >
          <span className="sr-only">number of items in cart: </span>
          {numOfItems}
        </p>
      )}
    </div>
  );
};

CartIcon.propTypes = {
  numOfItems: PropTypes.number,
};

export default CartIcon;
