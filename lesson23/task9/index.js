const inputArea = document.querySelector('.task-status');

const events = (event) => {
  console.log(event.target.checked);
};

inputArea.addEventListener('change', events);
