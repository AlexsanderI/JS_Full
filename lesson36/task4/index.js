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

const onScreanUser = async () => {
  showSpinner();
  cleanReposList();
  try {
    const userName = userNameInputElem.value;
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositoris(userData.repos_url);
    renderReport(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hiddenSpinner();
  }
};

showUserBtnElem.addEventListener('click', onScreanUser);
