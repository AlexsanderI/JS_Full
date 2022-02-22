import { getMinSquaredNumber } from "./getMinSquaredNumber";

it("should get null because string", () => {
  const result = getMinSquaredNumber("some string");
  expect(result).toEqual(null);
});

it("should get null to empty array", () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it("should get squared min numbers", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 45, -20]);

  expect(result).toEqual(4);
});
