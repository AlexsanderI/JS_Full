const baseUrl = 'https://62840a40a48bd3c40b6a3c4f.mockapi.io/api/v1/users';

function getUsersList() {
  return fetch(baseUrl).then((response) => response.json());
}

export function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`).then((response) => response.json());
}

function createUser(userData) {
  // put your code here
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

function deleteUser(userId) {
  // put your code here
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });
}

function updateUser(userId, userData) {
  // put your code here
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

// examples

// getUserById('1').then((userData) => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

createUser(newUserData).then(() => {
  console.log('User created');
});

getUsersList().then((users) => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});
// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('9').then(() => {
//   console.log('User updated');
// });
