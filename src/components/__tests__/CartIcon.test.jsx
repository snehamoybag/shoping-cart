import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import CartIcon from "../CartIcon";

describe("CartIcon component", () => {
  const getNumberEl = () => screen.queryByTestId("number-of-cart-items");

  test("shows number of items in cart", () => {
    render(<CartIcon numOfItems={10} />);
    const numberEl = getNumberEl();

    expect(numberEl).toBeInTheDocument();
    expect(numberEl).toHaveTextContent(/(10)/i);
  });

  test("does not render number element if number of items in cart is 0", () => {
    render(<CartIcon numOfItems={0} />);
    expect(getNumberEl()).not.toBeInTheDocument();
  });

  test("number element has textContent that describes what this number is for", () => {
    render(<CartIcon numOfItems={1} />);

    expect(getNumberEl()).toHaveTextContent(/(number of items in cart)/i);
  });

  test("number element has aria-live set to polite", () => {
    render(<CartIcon numOfItems={1} />);

    expect(getNumberEl()).toHaveAttribute("aria-live", "polite");
  });
});
