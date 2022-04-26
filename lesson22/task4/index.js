const inputElem = document.querySelector('.task-status');
const events = () => console.log(inputElem.checked);

inputElem.addEventListener('change', events);
