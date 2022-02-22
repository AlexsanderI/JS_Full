export const calc = (expression) => {
  if (typeof expression !== "string") {
    return null;
  }

  const [a, operation, b] = expression.split(" ");
  let result;

  switch (operation) {
    case "+":
      result = +a + +b;
      break;
    case "-":
      result = +a - +b;
      break;
    case "*":
      result = +a * +b;
      break;
    case "/":
      result = +a / +b;
      break;
  }

  return `${expression} = ${result}`;
};
console.log(calc("6 + 1"));
console.log(calc("6 - 2"));
console.log(calc("6 * 2"));
console.log(calc("6 / 4"));
console.log(calc(6 / 4));
