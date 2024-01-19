//

//! GPA calculator

const GPAQ = document.getElementById('GPAQ')
const GPAMaxQ = document.getElementById('GPAMaxQ')

const semester1 = document.querySelector('input[name="options"][value="option1"]')
const semester2 = document.querySelector('input[name="options"][value="option2"]')
const semester3 = document.querySelector('input[name="options"][value="option3"]')
const semester4 = document.querySelector('input[name="options"][value="option4"]')
const semester5 = document.querySelector('input[name="options"][value="option5"]')
const semester6 = document.querySelector('input[name="options"][value="option6"]')
const currentSemester = document.querySelector('input[name="options"]:checked')


//* Get data from local storage

const inputs = document.querySelectorAll('.GPACalc__input')
inputs.forEach(input => {
     if(input.value === "" && localStorage.getItem(input.id) !== null) {
          input.value = localStorage.getItem(input.id)
     }
})


//* Main function

function calculateTotal() {
     let total = 0
     let notEmpty = 0
   
     inputs.forEach(input => {
          const value = input.value.trim()
          if (value !== "") {
               notEmpty++
               const numericValue = parseFloat(value)
               if (!isNaN(numericValue)) {
                    total += numericValue
               }
          }

          // save to local storage
          localStorage.setItem(input.id, input.value)
     })
     let average = 4 - ( (total / notEmpty) - 1)
     GPAQ.innerHTML = average.toFixed(2)
}

inputs.forEach(input => {
     input.addEventListener("input", (e) => {
reloadAll()
     })
})


//* Max GPA

function calculateMaxGPA() {
     let total = 0
   
     inputs.forEach(input => {
          const value = input.value.trim()
          if (value !== "") {
               const numericValue = parseFloat(value)
               if (!isNaN(numericValue)) {
                    total += numericValue
               }
               console.log(total)
          }
          if(value === "") {
               total += 1
          }
     })
     let average = 4 - ( (total / 80) - 1)
     GPAMaxQ.innerHTML = average.toFixed(2)
}


//* Render page

function reloadAll() {
     calculateMaxGPA()
     calculateTotal()
}
reloadAll()