// add
// input: numb
// output: numb

// decrease
// input: numb
// output: numb

// reset
// input
// output: numb

// getMemo
// input
// output: numb
// add: recive number and add
// decrease: recive number and subtract from member a number
// reset: return 0
// reset: return previus number

let member = 3;
const add = (namb) => {
  return (member = namb + member);
};
const decrease = (namb) => (member = member - namb);
const reset = () => (member = 0);
const getMemo = () => member;

console.log(member);
console.log(add(3));

console.log(decrease(1));

console.log(getMemo());

console.log(reset());
