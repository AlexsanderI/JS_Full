// 1 создать рандомный id для каждого li и input чтобы их id были равны
// 2 изменить стиль li помле нажатия на check box(input)
// 2.1 создать функцию если check box(input) === true  то применить стиль list__item_done к list__item
//  и input равный по id
// создать функцию для добавления объекта в массив======
// 1 с помощью метода push добовляем объект с ключами и свойствами
//  2 если в обекте не пустая строка то добовляем текст если пустане не добовляем
//  3 после нажатия удалить текст с поля

const tasks = [
  { text: 'Buy milk', done: false, id: getRandomInt() },
  { text: 'Pick up Tom from airport', done: false, id: getRandomInt() },
  { text: 'Visit party', done: false, id: getRandomInt() },
  { text: 'Visit doctor', done: true, id: getRandomInt() },
  { text: 'Buy meat', done: true, id: getRandomInt() },
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
      listItemElem.dataset.id = id;
      // console.log(listItemElem.dataset.id);
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.dataset.id = id;
      checkbox.setAttribute('type', 'checkbox');

      // console.log(checkbox.dataset.id);
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
  // console.log(elId);
  const checkId = tasks.find((el) => Number(el.id) === Number(elId));
  console.log(checkId.done);
  if (event.target.checked) {
    checkId.done = true;
  } else {
    checkId.done = false;
  }
  listElem.innerHTML = '';
  renderTasks(tasks);
}
listElem.addEventListener('click', doneBox);

const pushBtn = document.querySelector('.btn');
const inputeText = document.querySelector('.task-input');

const addTask = (task) => {
  if (inputeText.value !== '') {
    tasks.push({
      text: inputeText.value,
      done: false,
      id: getRandomInt(),
    });
  }
  listElem.innerHTML = '';

  renderTasks(tasks);
  inputeText.value = '';
};

pushBtn.addEventListener('click', addTask);
