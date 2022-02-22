function swap(numbers) {
    // put your code here
    const [start, ...rest] = numbers;
    return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
    // put your code here
    let resultArr = numbers.slice();

    resultArr.push(resultArr[0]);
    resultArr.splice(0, 1);
    return resultArr;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([3, 22, 9, 11])); // ==> [10, 9, 11, 1]

// const numbers = [11, 23, 15, 45, 85, 635];

// const [vc, b, ...rest] = numbers;
// console.log(vc, b, rest);