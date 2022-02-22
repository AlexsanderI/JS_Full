// function countOccurrences(text, str) {
//   if (str === "") {
//     return null;
//   }
//   let counter = 0;
//   let underLine = text;
//   while (true) {
//     if (text.indexOf(str) === -1) {
//       break;
//     }

//     const index = underLine.indexOf(str);

//     underLine = underLine.slice(index + 1);

//     counter += 1;

//     if (underLine.indexOf(str) < 0) {
//       break;
//     }
//   }
//   return counter;
// }

// console.log(countOccurrences(1, 1));


// const string = 'Today, not tomorrow, good day to sleep';

const countOccurrences = (text, str) => {
  const newText = text.split(' ');
  let fine = 0;
  if (str.length === 0) {
    return null;
  }
  newText.forEach(element => {
    if (element.includes(str) === true) {
      fine += 1;
    }
  });
  return fine;
};

console.log(countOccurrences('my name', 'm'));