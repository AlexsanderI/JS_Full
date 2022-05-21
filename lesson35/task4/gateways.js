export const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};

export const fetchRepositoris = (url) =>
  fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
