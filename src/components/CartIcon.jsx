import "../styles/cart-icon.css";
import "../styles/sr-only.css";
import { Link } from "react-router-dom";

const CartIcon = () => {
  return (
    <Link to="/cart">
      <div className="cart-icon">
        <span className="sr-only">shopping cart</span>
      </div>
    </Link>
  );
};

export default CartIcon;
