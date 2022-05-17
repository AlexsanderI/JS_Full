const baseUrl =
  'https://crudcrud.com/api/b1fa0559f21a4945ae0e3ad7738e6d98/tasks';

const getTasksList = () => {
  return fetch(baseUrl).then((response) => response.json());
};

const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

getTasksList().then((tasksList) => {
  console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
});
