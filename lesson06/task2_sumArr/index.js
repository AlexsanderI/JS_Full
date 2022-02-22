'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sumArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
    }
    // put your code here
    return sumArr;
}

// examples
console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1]));
console.log(getSum([-8, 8]));
console.log(getSum(10, 12, 14));
// ; // ==> 1
// ; // ==> 0
// ; // ==> null