export function getTitle(text) {
  const newText = (document.querySelector(".title").textContent = text);
  return newText;
}
getTitle("New world!");
