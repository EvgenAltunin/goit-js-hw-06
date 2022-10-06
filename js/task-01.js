const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
console.log("");


const itemsEl = document.querySelectorAll(".item");

for (const item of itemsEl) {
    const itemTitleEl = item.firstElementChild;
    const itemElementsCount = item.querySelectorAll("li").length;
    console.log(`Category: ${itemTitleEl.textContent}`);
    console.log(`Elements: ${itemElementsCount}`);
    console.log("");
};