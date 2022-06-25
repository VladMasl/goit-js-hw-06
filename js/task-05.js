const inputEl = document.querySelector("#name-input");
const textRezOutput = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== "") {
    textRezOutput.textContent = event.currentTarget.value;
  } else {
    textRezOutput.textContent = "Anonymous";
  }
}
