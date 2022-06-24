const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.target;

  if (email.value === "" || password.value === "") {
    return alert("Bсі поля повинні бути заповнені.");
  }

  console.log(`EMAIL: ${email.value}, PASSWORD: ${password.value}`);

  event.target.reset();
});
