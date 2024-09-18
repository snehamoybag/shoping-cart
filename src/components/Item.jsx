import "../styles/item.css";
import PropTypes from "prop-types";
import Rating from "./Rating";
import ItemPrice from "./ItemPrice";
import BuyItem from "./BuyItem";

const Item = ({ item, handleAddToCart, handleBuyItem }) => {
  const { image, title, description, category, price, rating } = item;

  return (
    <section className="item">
      <div className="item__container">
        <Rating rating={rating.rate} ratingCount={rating.count} />
        <h1 className="item__name">{title}</h1>
        <div className="item__hero">
          <div className="item__img-wrapper">
            <img src={image} alt={title} className="item__image" />
            <ItemPrice price={price} />
          </div>
          <BuyItem
            item={item}
            handleAddToCart={handleAddToCart}
            handleBuyItem={handleBuyItem}
          />
        </div>
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
  handleAddToCart: PropTypes.func.isRequired,
  handleBuyItem: PropTypes.func.isRequired,
};

export default Item;
