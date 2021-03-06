const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

function getTasksList() {
  // put your code here
  return fetch(`${baseUrl}`).then((order) => order.json());
}

function getTaskById(taskId) {
  // put your code here
  return fetch(`${baseUrl}/${taskId}`).then((order) => order.json());
}

// examples
getTasksList().then((tasksList) => {
  console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
});

getTaskById('2').then((taskData) => {
  console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
});
