import "../styles/checkout.css";
import PropTypes from "prop-types";

const Checkout = ({ totalPrice, handleCheckout }) => {
  return (
    <div className="checkout">
      <p className="checkout__paragraph">
        Total price of all items: <strong>${totalPrice.toFixed(2)}</strong>
      </p>
      <button type="button" className="btn btn--cta" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

Checkout.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  handleCheckout: PropTypes.func,
};

export default Checkout;
