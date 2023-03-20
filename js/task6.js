const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", (event) => {
  if (validInput.getAttribute("data-length") == event.target.value.length) {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
  } else {
    validInput.classList.add("invalid");
    validInput.classList.remove("valid");
  }
});

validInput.addEventListener("focus", () => {
  validInput.classList.remove("invalid");
  validInput.classList.remove("valid");
});
