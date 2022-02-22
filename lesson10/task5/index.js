// get sum of array
// get decimal of number
// return number with format USD

const getTotalPrice = (arr) => {
  let sum = arr.reduce((total, amount) => total + amount);
  let arrAverage = Math.floor(sum * 100) / 100;
  console.log(arrAverage + ".00");
  return `$${arrAverage + ".00"}`;
};

console.log(getTotalPrice([2, 3.3, 10, 15, -17, -16]));

// function getTotalPrice(array) {
//   let result = 0;
//   array.forEach((element) => {
//     console.log(Math.floor(element * 100));
//     result = Math.floor(element * 100);
//   });
//   return result / 100;
// }

// console.log(getTotalPrice([1, 1.2485, 1.22, 1]));
