const inputElem = document.querySelector('.text-input');
const events = () => console.log(inputElem.value);

inputElem.addEventListener('change', events);
