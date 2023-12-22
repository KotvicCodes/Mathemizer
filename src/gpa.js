//

//! GPA calculator

const GPAQ = document.getElementById('GPAQ')
const GPAMaxQ = document.getElementById('GPAMaxQ')

calculateTotal()
function calculateTotal() {
     const inputs = document.querySelectorAll('.GPACalc__input')
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
          if(input.value !== "") {
               localStorage.setItem(input.id, input.value) 
          }
     })
     let average = 4 - ( (total / notEmpty) - 1)
     GPAQ.innerHTML += average.toFixed(2)
}


//* get data from local storage

const inputs = document.querySelectorAll('.GPACalc__input')
inputs.forEach(input => {
     if(input.value === "" && localStorage.getItem(input.id) !== null) {
          input.value = localStorage.getItem(input.id)
     }
})