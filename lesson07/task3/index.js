// let fflatArray = arr =>
// arr.flat(); 

  
let flatArray = arr => arr.flat(2).slice().sort((a, b) => a-b);
 

 console.log(flatArray([1,[1,3],[[1,3],[4,5]]]));

 


// console.log(sortDesc(fflatArray([1,[3,4],5,[1,6],2])));

// const flatArray = (arr) => {
//   // put your code here

//   let resultArr = arr.flat()
//   return resultArr.sort(function (a, b) {
//     return a - b;
//   });;
// };
// let inputArr = [1,[1,3],[1,3],[4,5]];
//  console.log(flatArray(inputArr));
// // console.log(flatArray(inputArr))


const flatArray = arr => {
  // put your code here
let resultArr = arr.reduce((acc, elem) => {
    return acc.concat(elem);
}, [])
  return resultArr.sort(function (a, b) {
    return a - b;
  });;
};
let inputArr = [1,[1,3],[1,3],[4,5]];
 
console.log(flatArray(inputArr));