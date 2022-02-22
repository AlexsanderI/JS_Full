function getSpecialNumbers(from, to) {
    // let num = 0;
    let newArr = []; // put your code here
    for (let i = from; i <= to; i++) {
        if (i % 3 === 0) {
            newArr.push(i);
        }
    }
    return newArr;
}

// examples
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]