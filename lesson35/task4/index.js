import { fetchUserData, fetchRepositoris } from './gateways.js';
import { renderUserData } from './users.js';
import { renderReport, cleanReposList } from './repo.js';
import { showSpinner, hiddenSpinner } from './spinner.js';

// const defaultUser = {
//   avatar_url: 'https://avatars3.githubusercontent.com/u10001',
//   name: '',
//   location: '',
// };

// renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onScreanUser = () => {
  cleanReposList();
  showSpinner();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositoris(url))
    .then((reposList) => {
      renderReport(reposList);
      hiddenSpinner();
    })
    .catch((err) => {
      hiddenSpinner();
      alert(err.message);
    });
};

showUserBtnElem.addEventListener('click', onScreanUser);
