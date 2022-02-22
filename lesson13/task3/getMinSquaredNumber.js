// if not is arr or if arr is empty return null
// make new positive arr
// get min numb
// retern square min numb

export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (arr[0] === undefined) {
    return null;
  }
  const arrIt = arr.map((num) => Math.abs(num));
  console.log(arrIt);
  const modul = Math.min(...arrIt);
  return modul * modul;
};

const arr = [-777, 3, -2, 45, -20];
console.log(getMinSquaredNumber(arr));
