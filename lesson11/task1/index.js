const spliTex = (text, len=10) => {
    const strArr = [];
    let startPosition = 0;
    if (typeof text !== 'string') {
        return null;
    }
    while (true) {
        let chunk = text.substr(startPosition, len);
          if (chunk.length === 0) {
            break;
        }
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
      startPosition += len
    }
    return strArr.join('\n');
};

console.log(spliTex('abcdefg', 4));
console.log(spliTex('abcdefgwqertytyyu', ));
console.log(spliTex('abcdefgqwerty', 4));
// make a array
// text devidi by part 
// itaration text
// if length = 0, stop itaration
// first part get upperCase second part get other text with out firs later
// return array
// if text not string


// function splitText(text, len = 10) {
//   const strArr = [];
//   let startPosition = 0;
//   if (typeof text !== "string") {
//     return null;
//   }
//   while (true) {
//     const chunk = text.substr(startPosition, len);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPosition += len;
//   }
//   return strArr.join("\n");
// }

// console.log(splitText("sssssssdfdsf"));
// console.log(splitText("sssssssdfdsf", 4));
// console.log(splitText(99, 4));