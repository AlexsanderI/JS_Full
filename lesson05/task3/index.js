let ev = 'even';
let od = 'odd';

function getEvenOdd(num) {
    if (num % 2 !== 0) {
        return od;
    } else {
        return ev;
    }
}
console.log(getEvenOdd(17));