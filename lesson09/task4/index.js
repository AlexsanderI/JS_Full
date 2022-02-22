/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

//add new key and value to object
// return resalt
function addPropertyV1(userData, userId) {
  // put your code here
  userData.id = userId;
  return userData;
}

//add new key and value to object with metod Object.assign
// return resalt
function addPropertyV2(userData, userId) {
   return Object.assign(userData,{id:userId})
}
// make new object
// add to new object from obj-user and add addition key & value
// return resalt
function addPropertyV3(userData, userId) {
    let newObj = {}
    newObj.id = userId
   return Object.assign({},userData, newObj)
}
// put your code here
// make copy of obgect 
// add to copy new key and value
// return resalt
const addPropertyV4 = (userData, userId) => ({...userData,id:userId})
// examples
const user = {
  name: 'Sam',
};
console.log(addPropertyV1(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV3(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV4(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(user);
