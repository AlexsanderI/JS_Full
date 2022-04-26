const btnClick = document.querySelectorAll('.pagination__page');

const events = (event) => {
  console.log(event.target.textContent);
};

btnClick[0].addEventListener('click', events);
btnClick[1].addEventListener('click', events);
btnClick[2].addEventListener('click', events);
