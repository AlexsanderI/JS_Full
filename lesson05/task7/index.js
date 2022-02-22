function compareSums(a, b, c, d) {
    let from = 0;
    let to = 0;
    for (let index = a; index <= b; index++) {
        from += index;
    }
    for (let index = c; index <= d; index++) {
        to += index;
    }
    return sum(from, to);
}

function sum(from, to) {
    if (from > to) {
        return true;
    } else {
        return false;
    }
}
console.log(compaareSums(2, 5, 2, 8));