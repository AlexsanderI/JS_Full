// const user ={
//   name: 'Tom',
//   age: 17,

// };
// Object.keys();
// Object.values();
// Object.entries();

// console.log(Object.entries(user));

// make from obj array into array
// iteration and filtering of new arry by value from obj more then 18
// iteration filtered of array  and return keys


const user ={
  'Tom': 17,
  'John Dou': 19,
  'Bob': 18,

};
const getAdults = userObj => {
  const newArray = Object.entries(userObj)
  const filteredUsersObj = newArray
  .filter(member => member[1] >=18);
  const nameUsers = filteredUsersObj
  .map(member => member[0])
  return nameUsers;
}
console.log(getAdults(user));