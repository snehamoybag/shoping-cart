import Item from "../components/Item";
import { useOutletContext, useParams } from "react-router-dom";
import getItemById from "../utils/getItemById";
import ItemsList from "../components/ItemsList";

const ItemPage = () => {
  const itemsList = useOutletContext();
  const { itemId } = useParams();

  const item = getItemById(Number(itemId), itemsList);
  return (
    <main>
      <Item item={item} />
      <ItemsList title={"Related Items"} items={itemsList} />
    </main>
  );
};

export default ItemPage;
