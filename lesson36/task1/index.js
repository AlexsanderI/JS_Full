const getValueWithDelay = (value, delay) =>
  new Promise((resolve, reject) => {
    if (value === !isNaN(value)) {
      setTimeout(() => {
        reject(new Error("Can't calculate"));
      }, delay);
    } else {
      setTimeout(() => {
        console.log(value);
        resolve(value);
      }, delay);
    }
  });

const asyncNumber1 = getValueWithDelay('w', 1000);
const asyncNumber2 = getValueWithDelay(1, 2000);
const asyncNumber3 = getValueWithDelay(53, 3000);
const asyncNumber4 = getValueWithDelay(34, 4000);

const getSum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch((error) => getSum(error));
};

asyncSum(asyncNumber1, asyncNumber2, asyncNumber3, asyncNumber4).then(
  (result) => console.log(result)
);

const { doc } = require('prettier');
