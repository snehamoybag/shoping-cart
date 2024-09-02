import { describe, test, expect } from "vitest";
import getTruncateString from "../getTruncateString";

describe("getTruncateString", () => {
  test("limits a string to a given length", () => {
    const string = "hello world";
    expect(getTruncateString(string, 5)).toBe("hello...");
  });

  test("ignore if given length is greater than or equal to the string's length", () => {
    const stringOne = "hello internet";
    expect(getTruncateString(stringOne, stringOne.length)).toBe(stringOne);

    const stringTwo = "Bye Bye Internet!";
    expect(getTruncateString(stringTwo, stringTwo.length + 1)).toBe(stringTwo);
  });
});
