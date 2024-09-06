import { describe, test, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Rating from "../Rating";

describe("Rating", () => {
  const getRatingEl = () => screen.queryByTestId("rating");
  const getCountEl = () => screen.queryByTestId("rating-count");

  test("renders rating and rating count when both of them are provided", () => {
    render(<Rating rating={3} ratingCount={500} />);

    const ratingEl = getRatingEl();
    const countEl = getCountEl();

    expect(ratingEl).toBeInTheDocument();
    expect(countEl).toBeInTheDocument();
  });

  test("does not render rating count if 'ratingCount' is not provided", () => {
    render(<Rating rating={3.5} />);

    const ratingCountEl = screen.queryByTestId("rating-count");
    expect(ratingCountEl).not.toBeInTheDocument();
  });

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
