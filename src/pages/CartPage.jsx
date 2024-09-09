import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const { cartData } = useOutletContext();
  const itemsList = Object.values(cartData).map(({ item, quantity }) => {
    return <CartItem key={item.id} item={item} quantity={quantity} />;
  });

  return (
    <main className="cart">
      <h1>Yout Cart</h1>
      {itemsList}
    </main>
  );
};

export default CartPage;
