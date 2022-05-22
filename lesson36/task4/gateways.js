export const fetchUserData = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);

  if (response.status === 200) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};

export const fetchRepositoris = async (url) => {
  const response = await fetch(url);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};

// ===========================================================

// export const fetchUserData = (userName) => {
//   return fetch(`https://api.github.com/users/${userName}`).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     }
//     throw new Error('Failed to load data');
//   });
// };

// export const fetchRepositoris = (url) =>
//   fetch(url).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     }
//     throw new Error('Failed to load data');
//   });

// ===========================================================
// export const fetchUserData = async (userName) => {
//   const response = await fetch(`https://api.github.com/users/${userName}`).then(
//     (response) => {
//       if (response.ok) {
//         return await response.json();
//       }
//       throw new Error('Failed to load data');
//     }
//   );
//   return response;
// };

// export const fetchRepositoris = async (url) => {
//   const response = await fetch(url).then((response) => {
//     if (response.ok) {
//       return await response.json();
//     }
//     throw new Error('Failed to load data');
//   });
//   return response;
// };

// ===========================================================
// export const fetchUserData = async (userName) => {
//   const response = await fetch(`https://api.github.com/users/${userName}`).then(
//     (response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Failed to load data');
//     }
//   );
//   return response;
// };
// export const fetchReposData = async (url) => {
//   const response = await fetch(url).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Failed to load data');
//   });
//   return response;
// };
