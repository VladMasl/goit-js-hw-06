const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.target;

  if (email.value === "" || password.value === "") {
    return alert("Bсі поля повинні бути заповнені.");
  }

  const dataForm = {
    email: email.value,
    password: password.value,
  };

  console.log(dataForm);
  event.target.reset();
});
