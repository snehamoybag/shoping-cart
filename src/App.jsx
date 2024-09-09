import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import itemsData from "./data/dummyData";
import { useState } from "react";

const App = () => {
  const navigateTo = useNavigate();
  const [cartData, setCartData] = useState({});

  const getclonedData = (data) => JSON.parse(JSON.stringify(data));

  const handleAddToCart = (item, quantity = 1) => {
    if (quantity < 1 || quantity > 10) return;

    setCartData((prevData) => {
      const isItemAlreadyInCart = Object.prototype.hasOwnProperty.call(
        prevData,
        item.id,
      );

      if (isItemAlreadyInCart) {
        const updatedData = getclonedData(prevData);
        let newQuantity = quantity + updatedData[item.id].quantity;

        if (newQuantity > 10) newQuantity = 10; // do not allow more than 10

        updatedData[item.id].quantity = newQuantity;
        return updatedData;
      }

      if (!isItemAlreadyInCart) {
        const newData = getclonedData(prevData);

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

  const handleRemoveCartItem = (itemId) => {
    setCartData((prevData) => {
      const updatedData = getclonedData(prevData);
      delete updatedData[itemId];

      return updatedData;
    });
  };

  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet
        context={{ itemsData, cartData, handleAddToCart, handleRemoveCartItem }}
      />
    </>
  );
};

export default App;
