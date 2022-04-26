const numbers = (from, to) => {
  const result = [];

  for (let index = from; index <= to; index += 1) {
    result.push(index);
  }

  return result;
};

const sectorSeat = () =>
  numbers(1, 10)
    .map(
      (seatNumber) =>
        `<div
    class = 'sector__seat'
    data-seat-number="${seatNumber}"
    ></div>
    `
    )
    .join('');

const sectorLine = () => {
  const seatsString = sectorSeat();
  return numbers(1, 10)
    .map(
      (lineNumber) =>
        `<div
    class = "sector__line"
    data-line-number="${lineNumber}"
    >${seatsString}</div>
    `
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const linesString = sectorLine();

  const sectorsString = numbers(1, 3)
    .map(
      (sectorNumber) =>
        `<div
    class = "sector"
    data-sector-number="${sectorNumber}"
    >${linesString}</div>
    `
    )
    .join('');
  arenaElem.innerHTML = sectorsString;
};
const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) {
    return;
  }
  const { seatNumber } = event.target.dataset;
  const { lineNumber } = event.target.closest('.sector__line').dataset;
  const { sectorNumber } = event.target.closest('.sector').dataset;

  const selectedSeatElem = document.querySelector('.board__selected-seat');
  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);
renderArena();
