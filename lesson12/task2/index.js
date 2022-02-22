// initialize new string
// iterate string from the end to the beginning of the string
// add iterate letter to the newString
// return new String
// if not string return nulll

function reverseString(str) {
  if (typeof str !== "string") {
    return null;
  }
  // var newString = "";

  return str.split("").reverse().join("");
  // for (var i = str.length - 1; i >= 0; i--) {
  //   newString += str[i];

  // return newString;
}
console.log(reverseString("Hello"));
