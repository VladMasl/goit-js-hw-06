const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

const onTargetBtnClick = document.querySelector("#value");

let counterValue = 0;

const btnClick = () => {
  counterValue = onTargetBtnClick.textContent;
  onTargetBtnClick.textContent = parseInt(counterValue) + 1;
};

incrementBtn.addEventListener("click", btnClick);

const ofTargetBtnClick = document.querySelector("#value");

const ofBtnClick = () => {
  counterValue = onTargetBtnClick.textContent;
  onTargetBtnClick.textContent = parseInt(counterValue) - 1;
};

decrementBtn.addEventListener("click", ofBtnClick);
