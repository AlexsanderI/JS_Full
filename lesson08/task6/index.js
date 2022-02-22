
const pickProps = (obj, props) => {
  // put your code here
  const resultObj = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
          props.map((item) => {
        if (item === key) {
          resultObj[key] = obj[key];
        }
     });
    }
  }
  
  return resultObj;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "b", "d", "hex"])); // ==> { a: 1, c: 3 }
