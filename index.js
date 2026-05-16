/* 
1 meter = 3.281 feet
1 litre = 0.264 gallon
1 kilogram = 2.204 pound
 */
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", convertValue)

function convertValue() {
  lengthEl.innerHTML = "<h3>Length (Meter/Feet)</h3>"
  volumeEl.innerHTML = "<h3>Volume (Liters/Gallons)</h3>"
  massEl.innerHTML = "<h3>Mass (Kilograms/Pounds)</h3>"
  const inputVal = Number(inputEl.value) //convert input from string to number.

  lengthEl.innerHTML += `<p>
    ${inputVal} meters =  ${(inputVal * 3.281).toFixed(3)} feet |
    ${inputVal} feet = ${(inputVal / 3.281).toFixed(3)} meters
  </p>
  `
  volumeEl.innerHTML += `<p>
    ${inputVal} litres =  ${(inputVal * 0.264).toFixed(3)} gallon |
    ${inputVal} gallon = ${(inputVal / 0.264).toFixed(3)} litres
  </p>
  `
  massEl.innerHTML += `<p>
    ${inputVal} kilos =  ${(inputVal * 2.204).toFixed(3)} pounds |
    ${inputVal} pounds = ${(inputVal / 2.204).toFixed(3)} kilos
  </p>
  `
  inputEl.value = ""
}