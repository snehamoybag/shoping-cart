import { describe, test, expect } from "vitest";
import filterItems from "../filterItems";

describe("filterItems", () => {
  const dummyData = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Johnny",
    },
    {
      id: 3,
      name: "John",
    },
  ];

  test("filters out items that matches the key and its value", () => {
    const nonJohnItems = filterItems("name", "John", dummyData);

    expect(nonJohnItems.length).toBe(1);
    expect(dummyData[1]).toBe(nonJohnItems[0]);
  });
});
