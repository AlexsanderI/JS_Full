//make array
// iterate numbers from and to repeat length of time
// remove decimal from number
// push numbers to array
// return array with numbers
// check code
// if between to and fom less than 1 return 'null'

"use strict";
const superRound = (num, prec) => {
  // put your code here
  const decimal = 10 ** prec;
  const arr = [
    Math.floor(num * decimal) / decimal,
    Math.trunc(num * decimal) / decimal,
    Math.ceil(num * decimal) / decimal,
    Math.round(num * decimal) / decimal,
    Number(num.toFixed(prec)),
  ];
  return arr;
};

// examples
console.log(superRound(11.12556, 3));
console.log(superRound(6.1, 3));

// const superRound = (num, prec) => {
//   // put your code here
//   const decimal = 10 ** prec;
//   const arr = [
//     Math.floor(num * decimal) / decimal,
//     Math.trunc(num * decimal) / decimal,
//     Math.ceil(num * decimal) / decimal,
//     Math.round(num * decimal) / decimal,
//     Number(num.toFixed(prec)),
//   ];
//   return arr;
// };

// // examples
// console.log(superRound(11.12556));
// console.log(superRound(6.112));
