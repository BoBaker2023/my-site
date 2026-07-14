let count = 0;

const countDisplay = document.getElementById("count");

const increaseButton = document.getElementById("increase");

const decreaseButton = document.getElementById("decrease");

const increaseFiveButton = document.getElementById("step");

const resetButton = document.getElementById("reset");

increaseButton.addEventListener("click", function () {
  count = count + 1;
  updateCountDisplay();
});

decreaseButton.addEventListener("click", function () {
  if (count > 0) {
    count--;
    updateCountDisplay();
  }
});

increaseFiveButton.addEventListener("click", function () {
  count = count + 5;
  updateCountDisplay();
});

resetButton.addEventListener("click", function () {
  count = 0;
  updateCountDisplay();
});

updateCountDisplay();

function updateCountDisplay() {
  countDisplay.textContent = count;

  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    count++;
    updateCountDisplay();
  }

  if (event.key === "ArrowDown" && count > 0) {
    count--;
    updateCountDisplay();
  }
});
