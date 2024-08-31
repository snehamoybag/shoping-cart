import "../styles/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__link">
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
