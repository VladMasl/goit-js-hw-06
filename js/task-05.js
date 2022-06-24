const inputEl = document.querySelector("#name-input");
const textRezOutput = document.querySelector("#name-output");
console.log(textRezOutput.textContent);

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  textRezOutput.textContent = event.currentTarget.value;
}
