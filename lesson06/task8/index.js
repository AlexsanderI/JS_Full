const increaseEvenEl = (arr, delta) => {
    // put your code here
    if (!Array.isArray(arr)) {
        return null;
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] += delta;
        }
        newArr.push(arr[i]);
    }
    return newArr;
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []