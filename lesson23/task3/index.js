// 1 создать рандомный id для каждого li и input чтобы их id были равны
// 2 изменить стиль li помле нажатия на check box(input)
// 2.1 создать функцию если check box(input) === true  то применить стиль list__item_done к list__item
//  и input равный по id

const tasks = [
  { text: 'Buy milk', done: false, id: getRandomInt() },
  { text: 'Pick up Tom from airport', done: true, id: getRandomInt() },
  { text: 'Visit party', done: false, id: getRandomInt() },
  { text: 'Visit doctor', done: false, id: getRandomInt() },
  { text: 'Buy meat', done: false, id: getRandomInt() },
];

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.dataset.id = id;

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const box = document.querySelectorAll('.list__item-checkbox');
function doneBox(event) {
  const elId = event.target.dataset.id;
  // const boxId = event.target.checked;
  const checkId = tasks.find((el) => el.id === elId);
  if (event.target.checked) {
    checkId.done = true;
  } else {
    checkId.done = false;
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
}
listElem.addEventListener('click', doneBox);

// function select(even) {
//   console.log(even.target.checked);
// }

// box[0].addEventListener('click', select);
// box[1].addEventListener('click', select);
// box[2].addEventListener('click', select);
// box[3].addEventListener('click', select);
// box[4].addEventListener('click', select);
// put your code here
