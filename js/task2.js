const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const pushElement = document.querySelector("#ingredients");

const footIngridients = ingredients.forEach((ingredient) => {
  let items = document.createElement("li");
  items.textContent = ingredient;
  items.classList.add("item");
  pushElement.append(items);
  console.log(items);
});
