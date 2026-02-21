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
let inputVal = ""

convertBtn.addEventListener("click", convertValue)

function convertValue() {
  lengthEl.innerHTML = "<h3>Length (Meter/Feet)</h3>"
  volumeEl.innerHTML = "<h3>Volume (Liters/Gallons)</h3>"
  massEl.innerHTML = "<h3>Mass (Kilograms/Pounds)</h3>"
  inputVal = Number(inputEl.value) //convert input from string to number.

  const metersToFeet = inputVal * 3.281
  const feetToMeters = inputVal / 3.281
  const litreToGallon = inputVal * 0.264
  const gallonToLitre = inputVal / 0.264
  const kgToPound = inputVal * 2.204
  const poundToKg = inputVal / 2.204

  lengthEl.innerHTML += `<p>
    ${inputVal} meters =  ${metersToFeet.toFixed(3)} feet |
    ${inputVal} feet = ${feetToMeters.toFixed(3)} meters
  </p>
  `
  volumeEl.innerHTML += `<p>
    ${inputVal} litres =  ${litreToGallon.toFixed(3)} gallon |
    ${inputVal} gallon = ${gallonToLitre.toFixed(3)} litres
  </p>
  `
  massEl.innerHTML += `<p>
    ${inputVal} kilos =  ${kgToPound.toFixed(3)} pounds |
    ${inputVal} pounds = ${poundToKg.toFixed(3)} kilos
  </p>
  `

  inputEl.value = ""
  inputVal = "" 
}