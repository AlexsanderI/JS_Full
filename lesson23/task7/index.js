const btnClick = document.querySelectorAll('.btn');

const events = (event) => {
  console.log(event.target.textContent);
};

btnClick[0].addEventListener('click', events);
btnClick[1].addEventListener('click', events);
