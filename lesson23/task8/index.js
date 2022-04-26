const inputAre = document.querySelector('.text-input');

const events = (event) => {
  console.log(event.target.value);
};

inputAre.addEventListener('change', events);
// btnClick[1].addEventListener('click', events);
