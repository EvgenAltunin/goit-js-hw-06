const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const newIngredientEl = document.createElement("li");
  newIngredientEl.textContent = ingredient;
  ingredientsListEl.append(newIngredientEl);
  newIngredientEl.classList.add("item")
}


