// 'use strict';

// export const fetchUser = (userId) => {
//   // put your code here
// };

// async function func() {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(17);
//     }, 1000);
//   });
//   const result = await promise;
//   console.log(result);
//   return 1;
// }

// const result = func();

const getUser = async (userId) => {
  try {
    const response = await fetch(`https://api.github.com/user/${userId}`);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

getUser('facebook')
  // .then((userData) => console.log(userData))
  .catch((err) => alert(err.message));
