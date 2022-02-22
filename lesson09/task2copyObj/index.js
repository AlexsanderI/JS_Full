

const users ={
    'Tom': 17,
    'Joe': 20,
    'Bob': 29,
    'Rosy': 14,
};
const players = {
    'Ann': 22,
    'Rosy': 26,
    'Kate': 27,
}
const copy = Object.assign({}, users, players);
console.log(copy);


// const copyObj = obj => Object.assign({}, obj);    

// console.log(copyObj(players));
// console.log(players);


// const user ={
//   'Tom': 17,
//   'John Dou': 19,
//   'Bob': 18,
// father:{
//     name:'Alex'
// }
// };

// const players = {...user}
// console.log(players);

// const users = {
//     name: 'Tom',
//     key: 17,
//     age: 25,
// }

// const {name: myName} = users;
// console.log(myName);
// // ====================================
// const {surname: myName = 'DEFAULT', ...myName} = users;
// console.log(myName);
// ====================================
// const {name='default', ...restProps} = users;
// console.log(restProps);
// ====================================

// const player = {
//     game:'football',
//     day: 'Sunday',
//     ...restProps
// }

// console.log(users);


// ========================================
// const users = {
//     name: 'Tom',
//     key: 17,
//     age: 25,
//     sayHi: function() {
//         console.log('Hi');
//         return 'hi';
//     }
// };
// console.log(users.sayHi());
// console.log('text'.toUpperCase());

const copyObj = obj => Object.assign({}, obj);