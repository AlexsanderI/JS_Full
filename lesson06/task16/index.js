function removeDuplicates(array) {
    for (let i = 0; i <= array.length; i++) {
        for (let k = 0; k < i; k++)
            if (array[i] === array[k]) {
                array.splice(k, 1);
            }
    }
    return array;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 4]));