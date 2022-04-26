function setButton(buttonText) {
  const newText = (document.querySelector('body').innerHTML = buttonText);
  return newText;
}
setButton('<button>button text</button>');

// console.log("hello");
