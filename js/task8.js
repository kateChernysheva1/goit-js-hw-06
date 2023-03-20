const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    [e.currentTarget.elements.email.name]: e.currentTarget.elements.email.value,
    [e.currentTarget.elements.password.name]:
      e.currentTarget.elements.password.value,
  };

  if (obj.email.trim() === "" || obj.password.trim() === "") {
    alert("Все поля должны быть заполнены");
  } else {
    console.log("Result: ", obj);
    loginForm.reset();
  }
});
