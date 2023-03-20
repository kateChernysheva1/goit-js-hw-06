const decr = document.querySelector("[data-action='decrement']");
const val = document.querySelector("#value");
const incr = document.querySelector("[data-action='increment']");

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  val.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  val.textContent = counterValue;
};

incr.addEventListener("click", increment);
decr.addEventListener("click", decrement);
