import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const taskTitleInputeElem = document.querySelector('.task-input');

  const text = taskTitleInputeElem.value;

  if (!text) {
    return null;
  }

  taskTitleInputeElem.value = '';
  const taskList = getItem('tasksList') || [];

  const newTasksList = taskList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem('tasksList', newTasksList);

  renderTasks();
};
