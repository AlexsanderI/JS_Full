// let start = 10;
// let end = 35;
// let resalt = 0;

// for (let index = start; index <= end; index++) {
//     if (index % 5 === 0) {
//         console.log(index);
//         continue;
//     }
//     // if (index % 4 === 0) {
//     //     // if (index % !4 === 1) {
//     //     console.log(resalt + index);
//     // }
//     // }
// }
const start = 1;
const end = 22;

let result = 0;

labelLoop: for (let i = start; i <= end; i++) {
    if (i % 5 === 0) {
        console.log(i);
        continue;
    }
    if (i % 4 !== 0) {
        if (i % 2 === 0 && i) {
            console.log((result += i));
            continue labelLoop;
        }
    }

    if (i % 3 === 0) {
        console.log((result -= i));
        continue labelLoop;
    }
    if (i % 4 === 0) {
        console.log((result *= i));
        continue;
    }
}