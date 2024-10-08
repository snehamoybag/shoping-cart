import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import Header from "./components/Header";
// import itemsData from "./data/dummyData";
import { useEffect, useState } from "react";
import deepClone from "./utils/deepClone";
import useItemsData from "./hooks/useItemsData";
import CircleLoading from "./components/CircleLoading";
import ErrorElement from "./components/ErrrorElement";

const App = () => {
  const {
    data: itemsData,
    error: itemsDataError,
    isLoading: isItemsDataLoading,
  } = useItemsData();

  console.log(typeof itemsDataError);

  const cartDataStorageKey = "cart-data";
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem(cartDataStorageKey)) || {},
  );

  // sync cart data with localStorage
  useEffect(() => {
    localStorage.setItem(cartDataStorageKey, JSON.stringify(cartData));
  }, [cartData]);

  const navigateTo = useNavigate();
  const handleAddToCart = (item, quantity = 1) => {
    if (quantity < 1 || quantity > 10) return;

    setCartData((prevData) => {
      const isItemAlreadyInCart = Object.prototype.hasOwnProperty.call(
        prevData,
        item.id,
      );

      if (isItemAlreadyInCart) {
        const updatedData = deepClone(prevData);
        let newQuantity = quantity + updatedData[item.id].quantity;

        if (newQuantity > 10) newQuantity = 10; // do not allow more than 10

        updatedData[item.id].quantity = newQuantity;
        return updatedData;
      }

      if (!isItemAlreadyInCart) {
        const newData = deepClone(prevData);

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
      const updateData = deepClone(prevData);
      updateData[itemId].quantity = newQuantity;
      return updateData;
    });
  };

  const handleRemoveCartItem = (itemId) => {
    setCartData((prevData) => {
      const updatedData = deepClone(prevData);
      delete updatedData[itemId];

      return updatedData;
    });
  };

  const getNumberOfItemsInCart = () => {
    const items = Object.values(cartData);

    return items.reduce((totalItems, itemData) => {
      return totalItems + itemData.quantity;
    }, 0);
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
      <Header numOfItemsInCart={getNumberOfItemsInCart()} />
      {isItemsDataLoading && <CircleLoading />}

      {itemsDataError && (
        <ErrorElement
          heading={itemsDataError.message}
          description={
            "Oops... something went worng while fetching data from server. Please try again later."
          }
          returnLinkText="Try Again"
        />
      )}

      {!isItemsDataLoading && !itemsDataError && (
        <Outlet context={outletContexts} />
      )}
    </>
  );
};

export default App;
