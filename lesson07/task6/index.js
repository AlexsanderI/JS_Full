function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const resultArr = arr.slice();
  return resultArr.reverse();
}
console.log(reverseArray(5,4,8,3,1,5,4));