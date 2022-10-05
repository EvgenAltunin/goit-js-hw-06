const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
console.log("");


const items = document.querySelectorAll(".item");

for (const item of items) {
    const itemTitle = item.querySelector("h2");
    const itemElementsCount = item.querySelectorAll("li").length;
    console.log(`Category: ${itemTitle.textContent}`);
    console.log(`Elements: ${itemElementsCount}`);
    console.log("");
};