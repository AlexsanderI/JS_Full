import { fetchUserData, fetchRepositories } from './crs/gateways.js';
import { renderUserData } from './crs/users.js';
import { renderRepos, cleanReposList } from './crs/repos.js';
import { showSpinner, hiddenSpinner } from './crs/spinner.js';

const defaulUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10002',
  name: '',
  location: '',
};
renderUserData(defaulUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
// const listElm = document.querySelector('.repo-list');

const onScreanUser = () => {
  showSpinner();
  cleanReposList();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => {
      renderRepos(reposList);
      hiddenSpinner();
    })
    .catch((err) => {
      hiddenSpinner();
      alert(err.message);
    });
};
showUserBtnElem.addEventListener('click', onScreanUser);
