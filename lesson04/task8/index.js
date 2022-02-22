let string = 'Found';
let sum = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 2 !== 0) {
        console.log(string);
        sum += i;
    }
}

if (sum * 5 > 5000) {
    console.log('Bigger');
}
if (sum * 5 < 5000) {
    console.log('Smaller or equel');
}