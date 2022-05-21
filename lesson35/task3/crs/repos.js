const listElm = document.querySelector('.repo-list');

export const cleanReposList = () => {
  listElm.innerHTML = '';
};

export const renderRepos = (reposList) => {
  const reposListElems = reposList.map(({ name }) => {
    const listElm = document.createElement('li');
    listElm.classList.add('repo-list__item');
    listElm.textContent = name;

    return listElm;
  });

  cleanReposList();
  listElm.append(...reposListElems);
};
