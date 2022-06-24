const frontSizeControl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

frontSizeControl.addEventListener("input", () => {
  spanTextEl.style.fontSize = frontSizeControl.value + "px";
});
