const fontControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontControl.addEventListener("input", (event) => {
  const eventValue = event.currentTarget.value;

  text.style.fontSize = eventValue + "px";
});
