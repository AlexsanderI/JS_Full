export const getAdults = (obj) => {
  // put your code here
  const resultObj = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      resultObj[key] = obj[key];
    }
  }

  return resultObj;
};

console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
