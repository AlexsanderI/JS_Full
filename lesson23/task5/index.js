const searchArea = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');

const events = () => console.log(searchArea.value);

searchBtn.addEventListener('click', events);
