const checkSum = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // return sum;
    if (sum > 100) {
        return true;
    } else {
        return false;
    }

    // put your code here
};

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true