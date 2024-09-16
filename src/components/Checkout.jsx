import PropTypes from "prop-types";

const Checkout = ({ totalPrice, handleCheckout }) => {
  return (
    <div>
      <p>Total price of all items: ${totalPrice.toFixed(2)}</p>
      <button type="button" name="btn-checkout" onClick={handleCheckout}>
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
