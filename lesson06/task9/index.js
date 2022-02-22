function reverseArray(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }
    let newArr = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        newArr.push(numbers[i]);
    }
    return newArr;
}

console.log(reverseArray([3, 2, 5, 1]));