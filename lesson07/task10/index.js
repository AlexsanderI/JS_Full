
function filterNames(arr, text) {
  var matches = [];
   arr.forEach(function(elem){
    if (elem.indexOf(text) != -1) matches.push(elem)
   
  });
     const result = matches.filter(arr => arr.length > 5);
  return result;
  


};

console.log (filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));