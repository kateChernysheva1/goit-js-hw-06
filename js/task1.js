const totalCategories = document.querySelectorAll(".item");
/*
const categoriesArray = [...totalCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");*/

const mass = [];
mass.push(`Number of categories: ${totalCategories.length}\n`);

[...totalCategories].forEach((categories) =>
  mass.push(`Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}\n`)
);

const res = mass.join("\n");

console.log(res);
