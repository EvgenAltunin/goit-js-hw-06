const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = ingredients.map(ingredient => {
  const newIngredientEl = document.createElement("li");
  newIngredientEl.textContent = ingredient;
  newIngredientEl.classList.add("item")

  return newIngredientEl;
})

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...items);


