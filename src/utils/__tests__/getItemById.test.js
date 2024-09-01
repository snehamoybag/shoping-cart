import { describe, test, expect } from "vitest";
import getItemById from "../getItemById";

describe("getItemById", () => {
  test("returns the item from a items list by matching the id", () => {
    const dummyList = [
      {
        id: 1,
        name: "foo",
      },

      {
        id: 2,
        name: "bar",
      },
      {
        id: 3,
        name: "baz",
      },
    ];

    const itemId = 2;
    const mathingItemFromList = getItemById(itemId, dummyList);

    expect(mathingItemFromList).toBe(dummyList[1]);
  });
});
