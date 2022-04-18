function finishList() {
  // const lastUl = document.querySelector("ul");
  const newText = document.querySelector(".list");
  const newLi = document.querySelector(".special");

  const newElement = document.createElement("li");
  newElement.textContent = "1";
  newText.prepend(newElement);

  const beforeNewLi = document.createElement("li");
  beforeNewLi.textContent = "4";
  newLi.before(beforeNewLi);

  const lastNewLi = document.createElement("li");
  lastNewLi.textContent = "6";
  newLi.after(lastNewLi);

  const lastElement = document.createElement("li");
  lastElement.textContent = "8";
  newText.append(lastElement);
}

finishList();
