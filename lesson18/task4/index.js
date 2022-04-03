function saveFuncCalls(func) {
  const calls = [];

  return function withMemory(...items) {
    calls.push(items);
    withMemory.calls = calls;
    return func.apply(this, items);
  };
}

// example 1
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(sum);
console.log(sumWithMemory(4, 2)); // ===> 6
sumWithMemory(9, 1); // ===> 10

console.log(sumWithMemory.calls); // ===> [ [4, 2], [9, 1] ]

// example 2
function addDelta(array, delta) {
  return array.map((el) => el + delta);
}

const addDeltaWithMemory = saveFuncCalls(addDelta);
console.log(addDeltaWithMemory([111, 22, 55, 4], 8)); // ===> [119, 30, 63, 12]
console.log(addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7)); // ===> [16, 8, -1, 22, 14, 7]

console.log(addDeltaWithMemory.calls); // ===> [ [[111, 22, 55, 4], 8], [[9, 1, -8, 15, 7, 0], 7] ]

// example 3
const user = {
  name: "John",
  sayHi() {
    return this.name;
  },
};

const sayHiWithMemory = saveFuncCalls(user.sayHi);
console.log(sayHiWithMemory()); // ===> throw error // because sayHiWithMemory lost context
const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: "Tom" });
console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

console.log(sayHiWithMemory.calls); // [ [] ]
