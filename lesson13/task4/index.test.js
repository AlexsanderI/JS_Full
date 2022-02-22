import { calc } from "./calculator";

it("should get sum a + b", () => {
  const result = calc("6 + 1");
  expect(result).toEqual("6 + 1 = 7");
});

it("should get sum a - b", () => {
  const result = calc("6 - 2");
  expect(result).toEqual("6 - 2 = 4");
});

it("should get sum a * b", () => {
  const result = calc("6 * 2");
  expect(result).toEqual("6 * 2 = 12");
});

it("should get sum a / b", () => {
  const result = calc("6 / 3");
  expect(result).toEqual("6 / 3 = 2");
});

it("should get null if not stirng", () => {
  const result = calc(6 / 4);
  expect(result).toEqual(null);
});
// console.log(calc('6 + 1'));
// console.log(calc('6 - 2'));
// console.log(calc('6 * 2'));
// console.log(calc('6 / 3'));
