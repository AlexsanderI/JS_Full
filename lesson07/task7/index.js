function increseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }else{
  return arr.filter((num) => num %2 === 0)
 .map(num => num + delta)
}
}

console.log(increseEvenEl([5,4,8,3,1,22,5],4));