import "../styles/sr-only.css";
import "../styles/item-quantity.css";
import "../styles/btn.css";
import PropTypes from "prop-types";

const ItemQuantity = ({
  quantity,
  handleIncrement,
  handleDecrement,
  handleInputChange,
}) => {
  return (
    <div className="item-quantity">
      <p className="item-quantity__title">Quantity</p>
      <div className="item-quantity__btn-input-wrapper">
        <button
          type="button"
          className="btn btn--increment"
          onClick={handleIncrement}
        >
          <span className="sr-only">increment quantity</span>
        </button>
        <label className="item-quantity__label">
          <span className="sr-only">type a quantity</span>
          <input
            type="number"
            className="item-quantity__input"
            name="item-quantity"
            value={quantity}
            onChange={handleInputChange}
            min="1"
            max="10"
            required
            data-testid="item-quantity-input"
          />
        </label>
        <button
          type="button"
          className="btn btn--decrement"
          onClick={handleDecrement}
        >
          <span className="sr-only">decrement quantity</span>
        </button>
      </div>
    </div>
  );
};

ItemQuantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleInputChange: PropTypes.func,
};

export default ItemQuantity;
