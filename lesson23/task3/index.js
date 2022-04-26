const sector = [
  { line: '', seat: '' },
  { line: '', seat: '' },
  { line: '', seat: '' },
  { line: '', seat: '' },
  { line: '', seat: '' },
  { line: '', seat: '' },
  { line: '', seat: '' },
  { line: '', seat: '' },
  { line: '', seat: '' },
];

const renderTasks = (tasksList) => {
  const listElem = document.querySelector('.sector');

  const listItemsElements = tasksList.map(({ line }) => {
    const listItemElem = document.createElement('div');
    listItemElem.classList.add('sector__line');

    const listItemsSeat = document.createElement('div');
    listItemsSeat.classList.add('sector__seat');
    listItemElem.append(listItemsSeat, line);

    return listItemElem;
  });

  listElem.append(...listItemsElements);
};
renderTasks(sector);

const renderTasksB = (tasksList) => {
  const listElem = document.querySelector('.sector__line');

  const listItemsElements = tasksList.map(({ line }) => {
    const listItemElem = document.createElement('div');
    listItemElem.classList.add('sector__seat');

    const listItemsSeat = document.createElement('div');
    listItemsSeat.classList.add('sector__seat');
    listItemElem.append(line);

    return listItemElem;
  });

  listElem.append(...listItemsElements);
};
renderTasksB(sector);

// const seatTasks = (tasksSeat) => {
//   const listSeat = document.querySelector('.sector__line');

//   const listItemsSeats = tasksSeat.map(({ seat }) => {
//     const listItemsSeat = document.createElement('div');
//     listItemsSeat.classList.add('sector__seat');
//     listItemsSeat.append(seat);
//     return listItemsSeat;
//   });

//   listSeat.append(...listItemsSeats);
// };
// seatTasks(sector);
