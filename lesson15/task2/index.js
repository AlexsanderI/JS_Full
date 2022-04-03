// add: recive number and add
// decrease: recive number and subtract from member a number
// reset: return 0
//make memo -  getMemo: return function

const createCalculator = () => {
  let member = 3;
  const add = (namb) => {
    return (member = namb + member);
  };
  const decrease = (namb) => (member = member - namb);
  const reset = () => (member = 0);
  const getMemo = () => member;
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

// console.log(member);
const messanger1 = createCalculator();
console.log(messanger1.add(3));
console.log(messanger1.decrease(3));
console.log(messanger1.reset(5));
