import "../styles/cart.css";
import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";

const CartPage = () => {
  const { cartData, updateCartItemQuantity, handleRemoveCartItem } =
    useOutletContext();

  const itemsData = Object.values(cartData);

  const itemsList = itemsData.map(({ item, quantity }) => {
    return (
      <CartItem
        key={item.id}
        item={item}
        quantity={quantity}
        updateItemQuantity={updateCartItemQuantity}
        handleRemoveItem={handleRemoveCartItem}
      />
    );
  });

  const totalPrice = itemsData.reduce((total, itemData) => {
    return (itemData.item.price + total) * itemData.quantity;
  }, 0);

  return (
    <main className="cart">
      <h1 className="cart__title">Your Cart</h1>
      <div className="cart__items">{itemsList}</div>
      {totalPrice > 0 && (
        <Checkout totalPrice={totalPrice} handleCheckout={() => {}} />
      )}
    </main>
  );
};

export default CartPage;
