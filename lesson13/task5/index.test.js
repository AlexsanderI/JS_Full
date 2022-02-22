import { reverseArray } from "./reverseArray";
import { getAdults } from "./getAdults";
import { withdraw } from "./withdraw";

it("should reverse array", () => {
  const result = reverseArray([3, 5, 1]);
  expect(result).toEqual([1, 5, 3]);
});

it("should reverse array", () => {
  const result = reverseArray([9, 6, 3]);
  expect(result).toEqual([3, 6, 9]);
});

it("should return null if string", () => {
  const result = reverseArray("if string");
  expect(result).toEqual(null);
});

it("Should be get balance 37", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(result).toEqual(37);
});

it("Should be get balance -1", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(result).toEqual(-1);
});

it("Should be get balance 1399", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "Ann", 1);
  expect(result).toEqual(1399);
});

it("Should be return more then value and key 18", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});

it("Should be return more then value and key 18", () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it("Should return empty obj if obj empty", () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
