//make new array
//remove objs from array
//remove all key from objs
// pushing into new array ol value from key 
// sum numb into aray and return sum



const getTotalRevenue = transactions => {
    let allName = [];
    const users = Object.keys(transactions);
   

    console.log(users);
    users.forEach((items) => {

        let person = transactions[items];
console.log(person);
        allName.push(person.amount)

    });
    let sumAmount = allName.reduce((total, amount) => total + amount);

    return sumAmount;
};

// examples
const dayTransactions = [{
        userId: 22,
        amount: 60,
        operation: 'sell'
    },
    {
        userId: 22,
        amount: 160,
        operation: 'buy'
    },
    {
        userId: 44,
        amount: 90,
        operation: 'sell'
    },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);

// function getSum(arr) {
//     if (!Array.isArray(arr)) {
//         return null;
//     }
//     let sumArr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumArr += arr[i];
//     }
//     // put your code here
//     return sumArr;
// }

// // examples
// console.log(getSum([1, 10, -10, 4])); // ==> 5
// console.log(getSum([1]));
// console.log(getSum([-8, 8]));
// console.log(getSum(10, 12, 14));

// const getPeople = obj => {
//     // put your code here
//     const rooms = Object.keys(obj);
//     let allName = [];
//     console.log(rooms);
//     rooms.forEach((items) => {
//         console.log(obj[items]);
//         let roomName = obj[items];
//         roomName.map((persone) => {
//             console.log(persone);
//             allName.push(persone.name);
//         })

//     })
//     return allName;
// };
// rooms = {
//     room1: [{
//             name: 'Jack'
//         },
//         {
//             name: 'Andrey'
//         },
//         {
//             name: 'Ann'
//         },
//         {
//             name: 'Vasyl'
//         },
//     ],
//     room2: [{
//         name: 'Dan'
//     }, ],
//     room3: [{
//             name: 'Denis'
//         },
//         {
//             name: 'Max'
//         },
//         {
//             name: 'Alex'
//         },
//     ],
// };
// console.log(getPeople(rooms))
