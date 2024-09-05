import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemsList from "../ItemsList";

describe("ItemsContainer", () => {
  test("renders items category name, when available", () => {
    const title = "Lorem Impsum";

    render(<ItemsList title={title} itemsList={[]} />);

    const titleEl = screen.getByRole("heading");

    expect(titleEl).toBeInTheDocument();
    expect(titleEl.textContent.toLowerCase()).toMatch(title.toLowerCase());
  });

  test("does not render any category name if not available", () => {
    render(<ItemsList itemsList={[]} />);

    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
