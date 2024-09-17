import "../styles/header.css";
import PropTypes from "prop-types";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = ({ numOfItemsInCart = 0 }) => {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <Logo />
        <Link to="/cart">
          <CartIcon numOfItems={numOfItemsInCart} />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

Header.propTypes = {
  numOfItemsInCart: PropTypes.number,
};

export default Header;
