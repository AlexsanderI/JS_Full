function sortAsc(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length - 1 - i; k++) {
            if (array[k + 1] < array[k]) {
                let t = array[k + 1];
                array[k + 1] = array[k];
                array[k] = t;
            }
        }
    }
    return array;
}

function sortDesc(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length - 1 - i; k++) {
            if (array[k + 1] > array[k]) {
                let t = array[k + 1];
                array[k + 1] = array[k];
                array[k] = t;
            }
        }
    }
    return array;
}
console.log(sortAsc([3, 2, 1000, 1]));
console.log(sortDesc([3, 2, 1000, 1]));