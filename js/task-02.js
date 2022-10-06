const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
for (const ingredient of ingredients) {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = ingredient;
  ingredientsList.append(newIngredient);
  newIngredient.classList.add("item")
}


