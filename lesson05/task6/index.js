function increaser(a, index) {
    let sum = 0;
    if (a > index) {
        sum = a + index;
        return sum;
    } else {
        return a;
    }
}
console.log(increaser(4, 8));