function uniqueCount(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    for (let i = 0; i <= array.length; i++) {
        for (let k = 0; k < i; k++)
            if (array[i] === array[k]) {
                array.splice(k, 1);
            }
    }
    return array.length;
}
console.log(uniqueCount([1, 1, 2, 3, 2]));