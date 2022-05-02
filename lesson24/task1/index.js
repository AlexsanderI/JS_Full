const week = ['So', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Su'];

function dayOfWeek(date, days) {
  const day = new Date(date).getDate();
  console.log(day);
  const dateInFuture = new Date(date).setDate(day + days);
  console.log(dateInFuture);
  console.log(new Date(dateInFuture).getDate());

  return week[new Date(dateInFuture).getDay()];
}

const result = dayOfWeek(new Date(2022, 3, 29), 20);

console.log(result);
