import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemsContainer from "../ItemsContainer";

describe("ItemsContainer", () => {
  test("renders items category name, when available", () => {
    const title = "Lorem Impsum";

    render(<ItemsContainer title={title} itemsList={[]} />);

    const titleEl = screen.getByRole("heading");

    expect(titleEl).toBeInTheDocument();
    expect(titleEl.textContent.toLowerCase()).toMatch(title.toLowerCase());
  });

  test("does not render any category name if not available", () => {
    render(<ItemsContainer itemsList={[]} />);

    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
