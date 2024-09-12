import BuyItem from "../BuyItem";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("BuyItem component", () => {
  const mockItem = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  describe("item quantity", () => {
    const getIncrementButton = () => {
      return screen.getByRole("button", { name: "increment quantity" });
    };

    const getDecrementButton = () => {
      return screen.getByRole("button", { name: "decrement quantity" });
    };

    const getInputField = () => {
      return screen.getByTestId("item-quantity-input");
    };

    test("has increment, decrement buttons and input field", () => {
      render(
        <BuyItem
          item={mockItem}
          handleAddToCart={() => {}}
          handleBuyItem={() => {}}
        />,
      );

      expect(getIncrementButton()).toBeInTheDocument();
      expect(getDecrementButton()).toBeInTheDocument();
      expect(getInputField()).toBeInTheDocument();
    });

    test("input field only excepts number between 1 to 10", () => {
      render(
        <BuyItem
          item={mockItem}
          handleAddToCart={() => {}}
          handleBuyItem={() => {}}
        />,
      );

      const inputEl = getInputField();

      expect(inputEl).toHaveAttribute("type", "number");
      expect(inputEl).toHaveAttribute("min", "1");
      expect(inputEl).toHaveAttribute("max", "10");
    });

    test("input field's initial value is 1", () => {
      render(
        <BuyItem
          item={mockItem}
          handleAddToCart={() => {}}
          handleBuyItem={() => {}}
        />,
      );

      expect(getInputField()).toHaveValue(1);
    });

    test("input field is editable", async () => {
      const user = userEvent.setup();

      render(
        <BuyItem
          item={mockItem}
          handleAddToCart={() => {}}
          handleBuyItem={() => {}}
        />,
      );

      const inputEl = getInputField();
      const initialValue = inputEl.value;
      const typeValue = "1234567890";

      await user.type(inputEl, typeValue);

      expect(inputEl).toHaveValue(Number(initialValue + typeValue));
    });

    test("clicking increment button increments the input field value if the value is less than 10", async () => {
      const user = userEvent.setup();

      render(
        <BuyItem
          item={mockItem}
          handleAddToCart={() => {}}
          handleBuyItem={() => {}}
        />,
      );

      const incremetButtonEl = getIncrementButton();
      const inputEl = getInputField();
      const prevInputValue = Number(inputEl.value);

      await user.click(incremetButtonEl);

      expect(inputEl).toHaveValue(prevInputValue + 1);
    });

    test("clicking increment button doesn't increment input field value if the value is more than 9", async () => {
      const user = userEvent.setup();

      render(
        <BuyItem
          item={mockItem}
          handleAddToCart={() => {}}
          handleBuyItem={() => {}}
        />,
      );

      const incremetButtonEl = getIncrementButton();
      const inputEl = getInputField();

      await user.clear(inputEl);
      await user.type(inputEl, "10");
      await user.click(incremetButtonEl);

      expect(inputEl).toHaveValue(10);
    });

    test("clicking decrement button doesn't decrement input field value if the value is less than 2", async () => {
      const user = userEvent.setup();

      render(
        <BuyItem
          item={mockItem}
          handleAddToCart={() => {}}
          handleBuyItem={() => {}}
        />,
      );

      const decremetButtonEl = getDecrementButton();
      const inputEl = getInputField();

      await user.click(decremetButtonEl);

      expect(inputEl).toHaveValue(1); // since initial valuue is 1
    });

    test("clicking decrement button decrements input field value if the value is greater than 1", async () => {
      const user = userEvent.setup();

      render(
        <BuyItem
          item={mockItem}
          handleAddToCart={() => {}}
          handleBuyItem={() => {}}
        />,
      );

      const decremetButtonEl = getDecrementButton();
      const inputEl = getInputField();

      await user.clear(inputEl);
      await user.type(inputEl, "5");

      await user.click(decremetButtonEl);

      expect(inputEl).toHaveValue(4);
    });
  });
});
