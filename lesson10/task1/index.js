// make new array whith nam filttering
// check nam by metods (isFinite, isNaN, isInteger)
// retur resalt


function getFiniteNumbers(item) {
    return item.filter((nam) => Number.isFinite(nam));
}

function getFiniteNumbersV2(item) {
    return item.filter((nam) => isFinite(nam));
}

function getNaN(item) {
    return item.filter((nam) => Number.isNaN(nam));
}

function getNaNV2(item) {
    return item.filter((nam) => isNaN(nam));
}

function getIntegers(item) {
  return item.filter((nam) => Number.isInteger(nam));
}

let namOrString = [17.23, 'fender', "12", 170000000000000, '15.25 text', NaN, Infinity, 'NaN', 'Infinity', 5, ]
console.log(getFiniteNumbers(namOrString));
console.log(getFiniteNumbersV2(namOrString));
console.log(getNaN(namOrString));
console.log(getNaNV2(namOrString));
console.log(getIntegers(namOrString));

