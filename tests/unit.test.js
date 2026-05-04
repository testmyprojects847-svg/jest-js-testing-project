const {
  add, divide,
  capitalize, reverseString,
  sumArray, removeDuplicates,
  mergeObjects, getFullName,
} = require("../src/utils");

describe("Unit Tests - Numbers", () => {
  test("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });
  test("throws error for non-number input", () => {
    expect(() => add("a", 3)).toThrow("Inputs must be numbers");
  });
  test("divides correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });
  test("throws error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});

describe("Unit Tests - Strings", () => {
  test("capitalizes a word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("returns empty string if input is empty", () => {
    expect(capitalize("")).toBe("");
  });
  test("throws if input is not a string", () => {
    expect(() => capitalize(123)).toThrow("Input must be a string");
  });
  test("reverses a string", () => {
    expect(reverseString("jest")).toBe("tsej");
  });
});

describe("Unit Tests - Arrays", () => {
  test("sums array of numbers", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });
  test("returns 0 for empty array", () => {
    expect(sumArray([])).toBe(0);
  });
  test("throws error if input is not array", () => {
    expect(() => sumArray("hello")).toThrow("Input must be an array");
  });
  test("removes duplicates from array", () => {
    expect(removeDuplicates([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });
});

describe("Unit Tests - Objects", () => {
  test("merges two objects", () => {
    expect(mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });
  test("later object overwrites earlier keys", () => {
    expect(mergeObjects({ a: 1 }, { a: 99 })).toEqual({ a: 99 });
  });
  test("returns full name from object", () => {
    expect(getFullName({ firstName: "Ahmed", lastName: "Ali" })).toBe("Ahmed Ali");
  });
  test("throws if name is missing", () => {
    expect(() => getFullName({ firstName: "Ahmed" })).toThrow();
  });
});