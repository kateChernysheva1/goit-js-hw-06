const spanColor = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");

buttonColor.addEventListener("click", (e) => {
  const functColor = getRandomHexColor();
  document.body.style.backgroundColor = functColor;
  spanColor.textContent = functColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
