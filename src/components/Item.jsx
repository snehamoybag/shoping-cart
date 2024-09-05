import "../styles/item.css";
import PropTypes from "prop-types";
import Rating from "./Rating";
import ItemPrice from "./ItemPrice";
import BuyItem from "./BuyItem";

const Item = ({ item }) => {
  const { image, title, description, category, price, rating } = item;

  return (
    <section className="item">
      <div className="item__rating-wrapper">
        <Rating rating={rating.rate} />
        <p className="item-info__rating-count">
          <span className="sr-only"> from</span>
          <span> ({rating.count})</span>
          <span className="sr-only"> ratings</span>
        </p>
      </div>
      <h1 className="item__name">{title}</h1>
      <div className="item__hero">
        <div className="item__img-wrapper">
          <img src={image} alt={title} className="item__image" />
          <ItemPrice price={price} />
        </div>
        <BuyItem name={name} price={price} />
      </div>
      <p className="item__paragraph">
        <span>Description:</span> {description}
      </p>
      <p className="item__paragraph">
        <span>Tag:</span> {category}
      </p>
    </section>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
