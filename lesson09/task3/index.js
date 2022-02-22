//iterating keys into obj 
//iterating keys into array and print to console



function getKeys(obj) {
 const key = Object.keys(obj)
 key.forEach(element => console.log(element));
}
// console.log(getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' }));
// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel