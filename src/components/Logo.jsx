import "../styles/logo.css";
import "../styles/sr-only.css";
import logoImg from "../assets/images/f.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImg} alt="logo" className="logo__img" />
      <h1 className="logo__text">
        <span className="sr-only">F</span>ake Shop
      </h1>
    </div>
  );
};

export default Logo;
