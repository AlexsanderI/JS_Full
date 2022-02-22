// make a array
// text devidi by part 
// itaration text
// if length = 0, stop itaration
// put string ilength by len
// if length less lenn add point
// return array
// if text not array return null



const splitString = (text, len=10) => {
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
        strArr.push(chunk[0] + chunk.slice(1));
      startPosition += len
    }
     let point = strArr[strArr.length - 1];
  if (point.length < len) {
    while (point.length < len) {
      point += ".";
    }
  }
  strArr[strArr.length - 1] = point;
    return strArr;
};

console.log(splitString('abcdefg', 4));
console.log(splitString('abcdefgwqertytyyu', ));
console.log(splitString('abcdefgqwerty', 4));
console.log(splitString(2, 4));

