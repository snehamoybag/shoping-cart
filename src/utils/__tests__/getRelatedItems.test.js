import { describe, test, expect } from "vitest";
import getRelatedItems from "../getRelatedItems";

describe("getRelatedIems", () => {
  test("returns the items that matches the given property name", () => {
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

    const fooItems = getRelatedItems("foo", dummyItems);

    expect(fooItems.length).toBe(3);
  });
});
