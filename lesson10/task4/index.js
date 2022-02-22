const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (arr[0] === undefined) {
    return null;
  }
  const arrIt = arr.map((num) => Math.abs(num));
  return Math.min(...arrIt);
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10]));
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6]));
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1]));
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));
// getMaxAbsoluteNumber([-10, 10, -10]); // ===> 10
// getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
// getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
// getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777
