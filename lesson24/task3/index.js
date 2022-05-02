const week = ['So', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Su'];

function dayOfWeek(date, days) {
  const day = new Date(date).getHours();
  console.log(day);
  const dateInFuture = new Date(date).setHours(day + days);
  console.log(dateInFuture);
  console.log(new Date(dateInFuture).getHours());

  return week[new Date(dateInFuture).getDay()];
}

const result = dayOfWeek(new Date(2022, 3, 29), 20);

console.log(result);

const formator = new Intl.DateTimeFormat('en', {
  timeZone: 'GMT',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

const getGreenwichTime = (date) => formator.format(date);

console.log(getGreenwichTime(new Date(2022, 3, 29, 7, 26, 4)));

var dateBirth = new Date(2022, 3, 6, 15, 45, 0); //"now"
var today = new Date(); // some date
// S

function getDiff(startDate, endDate) {
  const ms = Math.abs(startDate - endDate);
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);
  return days + 'd ' + hours + 'h ' + minutes + 'm ' + sec + 's';
}

console.log(getDiff(dateBirth, today));

// function dhm(ms) {
//   const days = Math.floor(ms / (24 * 60 * 60 * 1000));
//   const daysms = ms % (24 * 60 * 60 * 1000);
//   const hours = Math.floor(daysms / (60 * 60 * 1000));
//   const hoursms = ms % (60 * 60 * 1000);
//   const minutes = Math.floor(hoursms / (60 * 1000));
//   const minutesms = ms % (60 * 1000);
//   const sec = Math.floor(minutesms / 1000);
//   return days + 'd ' + hours + 'h ' + minutes + 'm ' + sec + 's';
// }
// console.log(dhm(diff));
