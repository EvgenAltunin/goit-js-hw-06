const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

var counterValue = Number(valueEl.textContent);

decrementBtnEl.addEventListener("click", onDecrementBtnElClick);
incrementBtnEl.addEventListener("click", onIncrementBtnElClick);


const onDecrementBtnElClick = () => {
  counterValue -= 1;
  valueEl.innerHTML = `${counterValue}`;
  console.log("Decrement button was clicked and the value was decremented by 1");

};

const onIncrementBtnElClick = () => {
  counterValue += 1;
  valueEl.innerHTML = `${counterValue}`;
  console.log("Increment button was clicked and the value was incremented by 1");
};

