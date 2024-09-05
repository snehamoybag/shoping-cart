import { describe, test, expect } from "vitest";
import getMatchingItems from "../getMatchingItems";

describe("getMatchingIems", () => {
  const dummyItems = [
    {
      id: 1,
      name: "foo",
    },

    {
      id: 2,
      name: "bar",
    },
    { id: 3, name: "foo" },
    {
      id: 4,
      name: "baz",
    },
    { id: 5, name: "foo" },

    {
      id: 6,
      name: "bar",
    },
  ];

  test("returns the items that matches the given key and its value", () => {
    const fooItems = getMatchingItems("name", "foo", dummyItems);
    expect(fooItems.length).toBe(3);
  });
});
