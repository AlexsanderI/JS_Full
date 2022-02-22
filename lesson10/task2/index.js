// make new array whith nam map
// make nam by metod (parseInt, parseFloat)
// retur resalt


function getParsedIntegers(item) {
    return item.map((nam) => Number.parseInt(nam));
}

function getParsedIntegersV2(item) {
    return item.map((nam) => parseInt(nam));
}

function getParsedFloats(item) {
    return item.map((nam) => Number.parseFloat(nam));
}

function getParsedFloatsV2(item) {
    return item.map((nam) => parseFloat(nam));
}

// function getIntegers(item) {
//   return item.map((nam) => Number.isInteger(nam));
// }

let namOrString = [17.23, 'fender', "12", 170000000000000, '15.25 text', NaN, Infinity, 'NaN', 'Infinity', 5, ]
console.log(getParsedIntegers(namOrString));
console.log(getParsedIntegersV2(namOrString));
console.log(getParsedFloats(namOrString));
console.log(getParsedFloatsV2(namOrString));
// console.log(getIntegers(namOrString));

