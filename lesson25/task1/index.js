const emailErrorRun = document.querySelector('.error-text_email');
const passwordErrorRun = document.querySelector('.error-text_password');

const emaiInputArea = document.querySelector('#email');
const passwordInputArea = document.querySelector('#password');

const requredPass = (value) => (value ? undefined : 'Required');
const requredEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorByField = {
  email: [requredPass, requredEmail],
  password: [requredPass],
};

const validate = (fielName, value) => {
  const validators = validatorByField[fielName];
  return validators
    .map((valid) => valid(value))
    .filter((errorText) => errorText)
    .join(', ');
};

const cachEmail = (event) => {
  const errorText = validate('email', event.target.value);
  emailErrorRun.textContent = errorText;
};

const cachPassword = (event) => {
  const errorText = validate('password', event.target.value);
  emailErrorRun.textContent = errorText;
  passwordErrorRun.textContent = errorText;
  //   console.log(event.target.value);
};

// const cachEmail = (event) => {
//   const errorText = [requredEmail, requredPass]
//     .map((valid) => valid(event.target.value))
//     .filter((errorText) => errorText)
//     .join(', ');
//   emailErrorRun.textContent = errorText;
//   console.log(event.target.value);
// };

// const cachPassword = (event) => {
//   const errorText = [requredPass]
//     .map((valid) => valid(event.target.value))
//     .filter((errorText) => errorText)
//     .join(', ');
//   passwordErrorRun.textContent = errorText;
//   console.log(event.target.value);
// };

emaiInputArea.addEventListener('input', cachEmail);
passwordInputArea.addEventListener('input', cachPassword);

const formEmail = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formEmail)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  alert(JSON.stringify(formData));
};

formEmail.addEventListener('submit', onFormSubmit);
