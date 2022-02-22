export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  var outArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    outArr.push(arr[i]);
  }
  return outArr;
}

console.log(reverseArray([3, 5, 1]));
