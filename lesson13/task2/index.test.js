import getSum, { getSqureArray, getOddNumbers } from "./calculator";

it("should get squared numbers", () => {
  const result = getSqureArray([1, 2, 3]);

  expect(result).toEqual([1, 4, 9]);
});

it("should keep odd numbers", () => {
  const result = getOddNumbers([1, 2, 3]);

  expect(result).toEqual([1, 3]);
});
export default (a, b) => a + b;
it("should get sum numbers", () => {
  const result = getSum(8, 12);

  expect(result).toEqual(20);
});
