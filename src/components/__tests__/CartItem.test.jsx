import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CartItem from "../CartItem";

describe("CartItem", () => {
  const mockItem = {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  };

  test("displays an image of item", () => {
    render(<CartItem item={mockItem} quantity={1} />);

    const imgEl = screen.getByRole("img");

    expect(imgEl).toBeInTheDocument();
    expect(imgEl).toHaveAttribute("src", mockItem.image);
    expect(imgEl).toHaveAttribute("alt", mockItem.title);
  });

  test("displays item name", () => {
    render(<CartItem item={mockItem} quantity={1} />);

    const nameEl = screen.getByRole("heading");

    expect(nameEl).toBeInTheDocument();
    expect(nameEl.textContent.toLowerCase()).toMatch(
      mockItem.title.toLowerCase(),
    );
  });

  test("displays quantity", () => {
    const quantity = 10;

    render(<CartItem item={mockItem} quantity={quantity} />);

    const quantityEl = screen.getByTestId("cart-item-quantity");
    const matchString = `quantity: ${quantity}`;

    expect(quantityEl).toBeInTheDocument();
    expect(quantityEl.textContent.toLowerCase()).toMatch(matchString);
  });

  test("displays total price", () => {
    const quantity = 5;
    const totalPrice = (mockItem.price * quantity).toFixed(2);

    render(<CartItem item={mockItem} quantity={quantity} />);

    const priceEl = screen.getByTestId("cart-item-price");
    const matchString = `total price: $${totalPrice}`;

    expect(priceEl).toBeInTheDocument();
    expect(priceEl.textContent.toLowerCase()).toMatch(matchString);
  });
});
