//make new array
//remove all keys from obj "rooms"
//iterating keys-[]
//remove obj from key (rooms1-2)
//pushing into new array(allName) value
// return new array array(allName)

const getPeople = obj => {
    // put your code here
    const rooms = Object.keys(obj);
    let allName = [];
    // console.log(rooms);
    rooms.forEach((items) => {
        // console.log(obj[items]);
        let roomName = obj[items];
        roomName.map((persone) => {
            // console.log(persone);
            allName.push(persone.name);
        })

    })
    return allName;
};
rooms = {
    room1: [{
            name: 'Jack'
        },
        {
            name: 'Andrey'
        },
        {
            name: 'Ann'
        },
        {
            name: 'Vasyl'
        },
    ],
    room2: [{
        name: 'Dan'
    }, ],
    room3: [{
            name: 'Denis'
        },
        {
            name: 'Max'
        },
        {
            name: 'Alex'
        },
    ],
};
console.log(getPeople(rooms))
// make from obj array into array
// iteration and filtering of new arry by value from obj more then 18
// iteration filtered of array  and return keys


// const user ={
//   'Tom': 17,
//   'John Dou': 19,
//   'Bob': 18,

// };
// const getAdults = userObj => {
//   const newArray = Object.entries(userObj)
//   const filteredUsersObj = newArray
//   .filter(member => member[1] >=18);
//   const nameUsers = filteredUsersObj
//   .map(member => member[0])
//   return nameUsers;
// }
// console.log(getAdults(user));