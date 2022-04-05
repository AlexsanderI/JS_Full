function getItemsList() {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
}

getItemsList();

function getItemsArray() {
  const elementArray = Array.from(document.querySelectorAll(".tool"));
  console.dir(elementArray);
  return elementArray;
}

getItemsArray();
