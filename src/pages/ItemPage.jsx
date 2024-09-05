import { useOutletContext, useParams } from "react-router-dom";
import Item from "../components/Item";
import ItemsList from "../components/ItemsList";
import getItemById from "../utils/getItemById";
import getMatchingItems from "../utils/getMatchingItems";
import filterItems from "../utils/filterItems";

const ItemPage = () => {
  const items = useOutletContext();

  const { itemId } = useParams();
  const item = getItemById(Number(itemId), items);

  const sameCategoryItems = getMatchingItems("category", item.category, items);
  const relatedItems = filterItems("id", item.id, sameCategoryItems); // do not show current item on related items

  return (
    <main>
      <Item item={item} />
      <ItemsList title={"Related Products"} items={relatedItems} />
    </main>
  );
};

export default ItemPage;
