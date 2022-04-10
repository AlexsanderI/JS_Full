export function getTitle() {
  const text = document.querySelector("title").textContent;
  console.log(text);
  return text;
}
getTitle();

export function getDescription() {
  const inner = document.querySelector("about").innerText;
  console.log(inner);
  return inner;
}
getDescription();

export function getPlans() {
  const inner = document.querySelector("plans").innerHTML;
  console.log(inner);
  return inner;
}
getPlans();

export function getGoal() {
  const outer = document.querySelector("goal").outerHTML;
  console.log(outer);
  return outer;
}
getGoal();
