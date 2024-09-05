import "../styles/items.css";
import PropTypes from "prop-types";
import ItemPreview from "./ItemPreview";

const ItemsList = ({ title, items }) => {
  const itemEls = items.map((item) => {
    return (
      <li key={item.id}>
        <ItemPreview item={item} />
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

ItemsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export default ItemsList;
