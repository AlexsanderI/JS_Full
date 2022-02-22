// make filter
// remove eliment if not string
// add new new element
// return element in format $
// const cleanTransaction = (str) => {};

function cleanTransactionsList(item) {
  let cur = item.filter((nam) => isFinite(nam));
  return cur.map((nam) => `$${Number(nam).toFixed(2)}`);
}

let namOrString = ["1.9", "16.4", "17"];
console.log(cleanTransactionsList(namOrString));
