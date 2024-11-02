/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convBtn = document.getElementById("convert-btn");
const clearBtn = document.getElementById("clear-btn");
let inputValue = document.getElementById("unitConv");
let dispLength = document.getElementById("disp-lm");
let dispVolume = document.getElementById("disp-lg");
let dispMass = document.getElementById("disp-kp");

// Length Conversion Function
function lengthConversion() {
  const feet = inputValue.value * 3.281;
  const meter = inputValue.value / 3.281;

  if (inputValue.value > 0) {
    dispLength.innerHTML = `<p>${inputValue.value} Meters = ${feet.toFixed(
      3
    )} Feet | ${inputValue.value} Feet = ${meter.toFixed(3)} Meters</p>`;
  } else {
    dispLength.innerHTML = `<p class="error-message">Please insert a value to convert</p>`;
  }
}

// Volume Conversion Function
function volumeConversion() {
  const gallon = inputValue.value / 3.785;
  const liter = inputValue.value * 3.785;

  if (inputValue.value > 0) {
    dispVolume.innerHTML = `<p>${inputValue.value} Litres = ${gallon.toFixed(
      3
    )} Gallons | ${inputValue.value} Gallons = ${liter.toFixed(3)} Litres</p>`;
  } else {
    dispVolume.innerHTML = `<p class="error-message">Please insert a value to convert</p>`;
  }
}

// Mass Conversion Function
function massConversion() {
  const pound = inputValue.value * 2.204;
  const kg = inputValue.value / 2.204;

  if (inputValue.value > 1) {
    dispMass.innerHTML = `<p>${inputValue.value} Kg = ${pound.toFixed(
      3
    )} Pounds | ${inputValue.value} Pounds = ${kg.toFixed(3)} Kg</p>`;
  } else {
    dispMass.innerHTML = `<p class="error-message">Please insert a value to convert</p>`;
  }
}

convBtn.addEventListener("click", function () {
  lengthConversion();
  volumeConversion();
  massConversion();
});

clearBtn.addEventListener("click", function () {
  dispLength.innerHTML = "";
  dispVolume.innerHTML = "";
  dispMass.innerHTML = "";
});
