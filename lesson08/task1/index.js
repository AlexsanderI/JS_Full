const transformToObject = arr => {
  let lom = {};
  arr.forEach(el  => {
    lom[el] = el;
  });
  return lom;
};


console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }









// const prop = 'my'
// const lom = {
// age: 17,
// interest: "footboll",
// name: "Alex",
// 'my name': 'Bob',
// [prop + 'name']: 'value',
// }
// console.log(lom.age);
// console.log(lom ['my name']);
// console.log(lom [prop + 'name']);