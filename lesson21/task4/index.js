function getTitle() {
  const text = document.querySelector(".title").textContent;
  console.log(text);
  return text;
}
getTitle();

function getDescription() {
  const inner = document.querySelector(".about").innerText;
  console.log(inner);
  return inner;
}
// getDescription();

function getPlans() {
  const inner = document.querySelector(".plans").innerHTML;
  console.log(inner);
  return inner;
}
// getPlans();

function getGoal() {
  const outer = document.querySelector(".goal").outerHTML;
  console.log(outer);
  return outer;
}
// getGoal();
