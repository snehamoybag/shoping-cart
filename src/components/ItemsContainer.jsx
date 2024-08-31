import "../styles/items.css";
import PropTypes from "prop-types";
import ItemPreview from "./ItemPreview";

const ItemsContainer = ({ title, itemsList }) => {
  const itemEls = itemsList.map((item, index) => {
    const { img, name, price, rating } = item;

    return (
      <li key={index}>
        <ItemPreview imgUrl={img} name={name} price={price} rating={rating} />
      </li>
    );
  });

  return (
    <section className="items">
      {title && <h2 className="items__title">{title}</h2>}
      <ul className="items__list">{itemEls}</ul>
    </section>
  );
};

ItemsContainer.propTypes = {
  title: PropTypes.string,
  itemsList: PropTypes.array.isRequired,
};

export default ItemsContainer;
