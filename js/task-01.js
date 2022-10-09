const categoriesList = document.querySelector("#categories");
const categoriesListItems = categoriesList.children;

console.log(`Number of categories: ${categoriesListItems.length}`);
console.log("");

for (const categoriesListItem of categoriesListItems) {
    const categoriesItemTitle = categoriesListItem.firstElementChild;
    const itemslist = categoriesListItem.lastElementChild;
    console.log(`Category: ${categoriesItemTitle.textContent}`);
    console.log(`Elements: ${itemslist.children.length}`);
    console.log("");
};