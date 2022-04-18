// export
function setTitle(text) {
  const newText = (document.querySelector(".title").textContent = text);
  return newText;
}
setTitle("New world!");
