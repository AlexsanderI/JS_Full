// saveCalls
// функция должна принимать функцию как единственный параметр
// вернуть функцию, которая будет запоминать все свои вызовы в свойстве calls,
// calls - массив результатов
// важна поддержка this
// saveCalls должна вернуть функцию с именем withMemory
// saveCalls должна вернуть массив calls, в котором запишуться все аргументы
// withMemory надо присвоить свойство calls созданный массив

const saveCalls = (func) => {
  const calls = [];
  return function withMemory(...arg) {
    withMemory.calls = calls;
    calls.push(arg);
    return func.apply(this, arg);
  };
};
function sum(a, b) {
  return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(sum);
console.log(testWithMemory(4, 2));
console.log(testWithMemory(9, 1));

console.log(testWithMemory.calls); // [ [4, 2], [9, 1] ]

/* Поддержка функций с контекстом */

const user = {
  name: "John",
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

console.log(methodWithMemory.apply({ name: "Tom" })); // 'Tom'

console.log(methodWithMemory.calls); // [ [] ]
