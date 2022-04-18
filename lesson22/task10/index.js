function finishForm() {
  const login = document.querySelector(".login-form");
  const loginBox = document.createElement("input");
  loginBox.setAttribute("type", "text");
  loginBox.setAttribute("name", "login");
  login.prepend(loginBox);

  const inputElem = document.querySelector('[name = "password"]');
  inputElem.setAttribute("type", "password");
}
finishForm();
