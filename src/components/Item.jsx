import PropTypes from "prop-types";

const Item = ({ item }) => {
  const { image, title, description, price, category, rating } = item;

  // just some placeholder for now
  return (
    <main className="item">
      <img src={image} alt={title} className="item__img" />
      <h1 className="item__name">{title}</h1>
      <p className="item__description">{description}</p>
    </main>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
