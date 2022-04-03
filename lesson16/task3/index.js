let arr = [];

for (let i = 0; i < 10; i += 1) {
  arr[i] = function () {
    return i;
  };
}

console.log(arr[5]());

// export
const createArrayOfFunctions = (number) => {
  const arr = [];

  if (number === undefined) {
    return arr;
  }
  if (typeof number !== "number") {
    return null;
  }
  for (let i = 0; i < number; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
};

console.log(createArrayOfFunctions(6)[3]());
console.log(createArrayOfFunctions("d"));
console.log(createArrayOfFunctions());
