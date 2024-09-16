import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Checkout from "../Checkout";
import userEvent from "@testing-library/user-event";

describe("Checkout", () => {
  test("displays total price fixed to 2 decimal points", () => {
    const totalPrice = 200.59;
    render(<Checkout totalPrice={totalPrice} />);

    const totalEl = screen.getByRole("paragraph");
    const matchString = `total price of all items: $${totalPrice}`;

    expect(totalEl).toBeInTheDocument();
    expect(totalEl.textContent.toLowerCase()).toMatch(matchString);
  });

  test("displays total price fixed to 2 decimal points", () => {
    render(<Checkout totalPrice={99.0111} />);

    const totalEl = screen.getByRole("paragraph");

    expect(totalEl.textContent).toMatch(/(99.01)/g);
  });

  test("displays a checkout button", () => {
    render(<Checkout totalPrice={50.0} />);

    const btnEl = screen.getByRole("button");

    expect(btnEl).toBeInTheDocument();
    expect(btnEl.textContent).toMatch(/checkout/i);
  });

  test("handleCheckout is called on checkout button click", async () => {
    const handleCheckoutMock = vi.fn();
    const user = userEvent.setup();

    render(
      <Checkout totalPrice={100.01} handleCheckout={handleCheckoutMock} />,
    );

    const btnEl = screen.getByRole("button");
    await user.click(btnEl);

    expect(handleCheckoutMock).toHaveBeenCalledOnce();
  });
});
