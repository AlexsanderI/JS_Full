'use strict';

/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
    let x = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            x = num;
        }
    }

    if (x == num) {
        return true;
    } else {
        return false;
    }
};

// examples
console.log(includes([2, 4, 8, 3], 4)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false