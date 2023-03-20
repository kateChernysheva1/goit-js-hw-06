const inputPalceholder = document.querySelector("#name-input");
const h1span = document.querySelector("#name-output");

inputPalceholder.addEventListener("input", (event) => {
  console.log(event);
  if (event.currentTarget.value.trim() === "") {
    h1span.textContent = "Anonymous";
  } else {
    h1span.textContent = event.currentTarget.value.trim();
  }
});
