//make array 
// iterate numbers from and to repeat length of time 
// remove decimal from number 
// push numbers to array 
// return array with numbers
// check code
// if between to and fom less than 1 return 'null' 

const getRandomNumbers = (length, from, to) => {
   if(to - from < 1){
      return null;
   }
    // put your code here
    const random = [];
    for (let i = 0; i < length; i++) {
        let num = Math.trunc(Math.random() * (from - to) + to);

        random.push(num)
        //   return (Math.trunc(random.push(num)));
    }
    return random;
};
// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]