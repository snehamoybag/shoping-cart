import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import itemsData from "./data/dummyData";
import { useState } from "react";

const App = () => {
  const navigateTo = useNavigate();
  const [cartData, setCartData] = useState({});

  const getClonedData = (data) => JSON.parse(JSON.stringify(data));

  const handleAddToCart = (item, quantity = 1) => {
    if (quantity < 1 || quantity > 10) return;

    setCartData((prevData) => {
      const isItemAlreadyInCart = Object.prototype.hasOwnProperty.call(
        prevData,
        item.id,
      );

      if (isItemAlreadyInCart) {
        const updatedData = getClonedData(prevData);
        let newQuantity = quantity + updatedData[item.id].quantity;

        if (newQuantity > 10) newQuantity = 10; // do not allow more than 10

        updatedData[item.id].quantity = newQuantity;
        return updatedData;
      }

      if (!isItemAlreadyInCart) {
        const newData = getClonedData(prevData);

        newData[item.id] = {
          item: item,
          quantity: quantity,
        };

        return newData;
      }

      // else
      return prevData;
    });

    // automatically reroute the user to cart page
    navigateTo("/cart");
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) return;

    setCartData((prevData) => {
      const updateData = getClonedData(prevData);
      updateData[itemId].quantity = newQuantity;
      return updateData;
    });
  };

  const handleRemoveCartItem = (itemId) => {
    setCartData((prevData) => {
      const updatedData = getClonedData(prevData);
      delete updatedData[itemId];

      return updatedData;
    });
  };

  const outletContexts = {
    itemsData,
    cartData,
    handleAddToCart,
    updateCartItemQuantity,
    handleRemoveCartItem,
  };

  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet context={outletContexts} />
    </>
  );
};

export default App;
