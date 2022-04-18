const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const eventsListElement = document.querySelector('.events-list');

const logoTarget = (text, color) => {
  eventsListElement.innerHTML += `<span style='color: ${color}; margin-left: 8px'>${text}</span>`;
};

const clear = () => {
  eventsListElement.innerHTML = '';
};
const btnClear = clear.bind(null);

const logGreenDiv = logoTarget.bind(null, 'DIV', 'green');
const logGreenP = logoTarget.bind(null, 'P', 'green');
const logGreenSpan = logoTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logoTarget.bind(null, 'DIV', 'grey');
const logGreyP = logoTarget.bind(null, 'P', 'grey');
const logGreySpan = logoTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreenDiv);
divElem.addEventListener('click', logGreyDiv, true);

pElem.addEventListener('click', logGreenP);
pElem.addEventListener('click', logGreyP, true);

spanElem.addEventListener('click', logGreenSpan);
spanElem.addEventListener('click', logGreySpan, true);

const attachHndl = () => {
  divElem.addEventListener('click', logGreenDiv);
  divElem.addEventListener('click', logGreyDiv, true);

  pElem.addEventListener('click', logGreenP);
  pElem.addEventListener('click', logGreyP, true);

  spanElem.addEventListener('click', logGreenSpan);
  spanElem.addEventListener('click', logGreySpan, true);
};

const removeHndl = () => {
  divElem.removeEventListener('click', logGreenDiv);
  divElem.removeEventListener('click', logGreyDiv, true);

  pElem.removeEventListener('click', logGreenP);
  pElem.removeEventListener('click', logGreyP, true);

  spanElem.removeEventListener('click', logGreenSpan);
  spanElem.removeEventListener('click', logGreySpan, true);
};

clearBtn.addEventListener('click', btnClear);
attachBtn.addEventListener('click', attachHndl);
removeBtn.addEventListener('click', removeHndl);

// elem.addEventListener('click', () => {
//   console.log('div');
// });

// const hadler = () => {
//   console.log('div');
// };

// elem.addEventListener('click', hadler);
// elem.removeEventListener('click', hadler);
