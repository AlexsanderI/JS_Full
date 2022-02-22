function getSum(from, to) {
    let sum = 0;
    for (let index = from; index <= to; index++) {
        if (index % 2 === 0) {
            sum += index;
        }
    }
    return sum;
}

console.log(getSum(1, 10));