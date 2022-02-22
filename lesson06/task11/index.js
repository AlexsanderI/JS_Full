function checker(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let min = arr[0];
    let max = min;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    if (min + max > 1000) {
        return true;
    } else {
        return false;
    }
}

console.log(checker([3, 2, 1000, 1]));