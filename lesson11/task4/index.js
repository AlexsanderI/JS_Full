// make function with argument of text & simbol of search
// itarate text
// if finde simbol = true
// if finde true +1
// rerun result
const countOccurrences = (text, str) => {
  const newText = text.split(" ");
  let fine = 0;
  if (str === "") {
    return null;
  }

  for (const char of newText) {
    let same = char.includes(str);
    if (same === true) {
      fine += 1;
    }
  }
  return fine;
};

console.log(countOccurrences("my name", "m"));
