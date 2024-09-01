import PropTypes from "prop-types";
import Item from "../components/Item";

const ItemPage = ({ item }) => {
  return <Item item={item} />;
};

ItemPage.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemPage;
