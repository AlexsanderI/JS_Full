const btnClick = document.querySelector('.single-use-btn');

const events = () => {
  console.log('clicked');
  btnClick.removeEventListener('click', events);
};

btnClick.addEventListener('click', events);
