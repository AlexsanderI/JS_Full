function findDivCount(a, b, n) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            sum += 1;
        }
    }
    return sum;
}
console.log(findDivCount(2, 6, 3));