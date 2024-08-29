import "../styles/header.css";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <Logo />
        <CartIcon />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
