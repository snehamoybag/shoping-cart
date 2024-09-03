import "../styles/sr-only.css";
import "../styles/item.css";
import PropTypes from "prop-types";
import ItemPrice from "./ItemPrice";
import Rating from "./Rating";

const Item = ({ item }) => {
  const { image, title, description, price, category, rating } = item;

  return (
    <section className="item">
      <div className="item__info">
        <div className="item__rating-wrapper">
          <Rating rating={rating.rate} />
          <p className="item__rating-count">
            <span className="sr-only"> from</span>
            <span className="total-rating"> ({rating.count})</span>
            <span className="sr-only"> ratings</span>
          </p>
        </div>
        <h1 className="item__name">{title}</h1>
        <img src={image} alt={title} className="item__img" />
        <ItemPrice price={price} />
        <span className="item__line"></span>
        <p className="item__paragraph">
          <span>Description:</span> {description}
        </p>
        <p className="item__paragraph">
          <span>Tag:</span> {category}
        </p>
      </div>
    </section>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
