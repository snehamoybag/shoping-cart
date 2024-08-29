import "../styles/nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__link">
          <a href="/">Home</a>
        </li>
        <li className="nav__link">
          <a href="store">Store</a>
        </li>
        <li className="nav__link">
          <a href="about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
