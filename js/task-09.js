function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const textFonColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();

  textFonColor.textContent = document.body.style.backgroundColor;
});
