function squaredNumbers() {
  const dataAtt = document.querySelectorAll(".number");
  for (let cell of dataAtt) {
    let squaredData = cell.dataset.number;
    cell.setAttribute("data-squared-number", squaredData * squaredData);
  }
}
squaredNumbers();
