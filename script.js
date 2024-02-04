const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const counterValueEl = document.querySelector(".counter__value");
const resetButtonEl = document.querySelector(".counter__reset-counter");

const counterReset = () => {
  counterValueEl.textContent = 0;
  counterEl.classList.remove("counter--limit");
  counterTitleEl.innerHTML = "Fancy Counter";
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  resetButtonEl.blur();
};
const counterIncrease = () => {
  const currentValue = counterValueEl.textContent;
  let newValue = parseInt(currentValue) + 1;
  if (newValue > 5) {
    newValue = 5;
    counterEl.classList.add("counter--limit");
    counterTitleEl.innerHTML = "Limit by <b>Pro</b> for > 5";
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  counterValueEl.textContent = newValue;

  increaseButtonEl.blur();
};
const counterDecrease = () => {
  const currentValue = counterValueEl.textContent;
  let newValue = parseInt(currentValue) - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  counterValueEl.textContent = newValue;
  decreaseButtonEl.blur();
};

resetButtonEl.addEventListener("click", counterReset);
increaseButtonEl.addEventListener("click", counterIncrease);
decreaseButtonEl.addEventListener("click", counterDecrease);
document.addEventListener("keydown", function (event) {
  const currentValue = parseInt(counterValueEl.textContent);
  if (event.key === "ArrowUp" && currentValue <= 5 && currentValue >= 0) {
    counterIncrease();
  } else if (
    event.key === "ArrowDown" &&
    currentValue < 5 &&
    currentValue >= 0
  ) {
    counterDecrease();
  }
});
