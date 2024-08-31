import { describe, test, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Rating from "../Rating";

describe("Rating", () => {
  const getRatingEl = () => screen.getByRole("paragraph");

  test("has bad rating styles when rating is bellow 2", () => {
    render(<Rating rating={1.9} />);
    expect(getRatingEl()).toHaveClass("bad");

    cleanup();

    render(<Rating rating={2} />);
    expect(getRatingEl()).not.toHaveClass("bad");
  });

  test("has decent rating styles when rating is more than or equal to 2 and less than 3.5", () => {
    render(<Rating rating={2} />);
    expect(getRatingEl()).toHaveClass("decent");

    cleanup();

    render(<Rating rating={3.4} />);
    expect(getRatingEl()).toHaveClass("decent");

    cleanup();

    render(<Rating rating={3.5} />);
    expect(getRatingEl()).not.toHaveClass("decent");
  });

  test("has good rating styles when rating is above 3.5", () => {
    render(<Rating rating={3.5} />);
    expect(getRatingEl()).toHaveClass("good");

    cleanup();

    render(<Rating rating={5} />);
    expect(getRatingEl()).toHaveClass("good");
  });
});
