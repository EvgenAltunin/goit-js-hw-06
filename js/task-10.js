function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls");
const input = controls.firstElementChild;
const createNewboxesBtn = document.querySelector('[data-create]');
const destroyBoxesBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

createNewboxesBtn.addEventListener('click', onCreateNewboxesBtnClick);
destroyBoxesBtn.addEventListener('click', onDestroyBoxesBtnClick)

function onCreateNewboxesBtnClick(event) {
  createBoxes();
}

function onDestroyBoxesBtnClick(params) {
  destroyBoxes();
}

function createBoxes(amount) {
  amount = Number(input.value);
  const createdBoxes = [];
  for (let i = 0; i < amount; i+=1) {
    const box = document.createElement('div');
    box.classList.add('box')
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginTop = `${10}px`;
    createdBoxes.push(box);
  }
  
  boxes.append(...createdBoxes);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}