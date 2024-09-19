import { useOutletContext, useParams } from "react-router-dom";
import Item from "../components/Item";
import ItemsList from "../components/ItemsList";
import getItemById from "../utils/getItemById";
import getMatchingItems from "../utils/getMatchingItems";
import filterItems from "../utils/filterItems";
import ErrorElement from "../components/ErrrorElement";

const ItemPage = () => {
  const { itemsData, handleAddToCart } = useOutletContext();

  const { itemId } = useParams();
  const item = getItemById(Number(itemId), itemsData);

  // if item does not exist in items data, return not found component
  if (!item) {
    return (
      <ErrorElement
        heading={"Error 404: Item not found!"}
        description={
          "Oops... The product you are looking for does not exist or has been removed."
        }
      />
    );
  }

  const sameCategoryItems = getMatchingItems(
    "category",
    item.category,
    itemsData,
  );
  const relatedItems = filterItems("id", item.id, sameCategoryItems); // do not show current item on related items

  return (
    <main>
      <Item
        item={item}
        handleAddToCart={handleAddToCart}
        handleBuyItem={() => {}}
      />
      <ItemsList title={"Related Products"} items={relatedItems} />
    </main>
  );
};

export default ItemPage;
