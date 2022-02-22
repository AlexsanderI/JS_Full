function sum (arr){
  if(!Array.isArray(arr)){
    return null;
  }else{
   return arr.reduce((total, amount) => total + amount);
  }
}

console.log(sum([1,2,3,6,8,7]));