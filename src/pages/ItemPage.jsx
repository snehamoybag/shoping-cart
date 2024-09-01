import Item from "../components/Item";
import { useOutletContext, useParams } from "react-router-dom";
import getItemById from "../utils/getItemById";

const ItemPage = () => {
  const itemsList = useOutletContext();
  const { itemId } = useParams();

  const item = getItemById(Number(itemId), itemsList);
  return <Item item={item} />;
};

export default ItemPage;
