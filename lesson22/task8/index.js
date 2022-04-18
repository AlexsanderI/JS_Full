// function clearList() {
//   const buttonElem = document.createElement("button");
//   return (buttonElem.append = "Send Email");
// }
// clearList();

// console.log("hello");
function createButton(buttonText) {
  const newText = document.querySelector("body");
  const newElement = document.createElement("button");
  newElement.innerHTML = buttonText;
  newText.append(newElement);
}

createButton("Send Emaile");
