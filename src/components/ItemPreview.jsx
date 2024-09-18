import "../styles/sr-only.css";
import "../styles/item-preview.css";
import PropTypes from "prop-types";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import getTruncateString from "../utils/getTruncateString";
import ItemPrice from "./ItemPrice";

const ItemPreview = ({ item }) => {
  const { id, title, image, price, rating } = item;
  const itemPageLink = `/item/${id}`;

  return (
    <div className="item-preview">
      <div className="item-preview__img-wrapper">
        <Link to={itemPageLink}>
          <img src={image} alt={title} className="item-preview__img" />
        </Link>
        <Rating rating={rating.rate} />
      </div>
      <Link to={itemPageLink}>
        <h2 className="item-preview__name">{getTruncateString(title, 50)}</h2>
      </Link>
      <ItemPrice price={price} />
    </div>
  );
};

ItemPreview.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemPreview;
