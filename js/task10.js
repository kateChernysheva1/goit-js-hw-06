const input = document.querySelector("#controls input");
const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");

dataCreate.addEventListener("click", createBoxes);
let size = 30;

function createBoxes() {
  const amount = input.value;
  for (let index = 0; index < amount; index++) {
    const elem = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    box.insertAdjacentHTML("beforeend", elem);
    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

dataDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  box.innerHTML = "";
  size = 30;
  input.value = 0;
}
