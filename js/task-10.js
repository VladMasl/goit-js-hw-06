function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector(" button[data-create]");
const btnDestroy = document.querySelector(" button[data-destroy]");

const inputEl = document.querySelector("#controls input");

const listBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  for (let index = 0; index < inputEl.value; index += 1) {
    const boxElement = document.createElement("div");
    boxElement.style.backgroundColor = getRandomHexColor();

    boxElement.style.height = (index + 1) * 10 + 20 + "px";
    boxElement.style.width = (index + 1) * 10 + 20 + "px";

    console.log(boxElement);
    listBoxes.insertAdjacentElement("beforeend", boxElement);

    btnDestroy.addEventListener("click", () => {
      boxElement.remove();
    });
  }
});
