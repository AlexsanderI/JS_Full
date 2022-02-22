
const concatProps = obj => {
    let newArr = [];
  for (let key in obj){
      newArr.push(obj[key]);
  }
    
  return newArr;
};

// examples
 console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']log