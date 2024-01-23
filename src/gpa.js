//

//! Variables

const GPAQ = document.getElementById('GPAQ')
const GPAMaxQ = document.getElementById('GPAMaxQ')

const semester1 = document.querySelector('input[name="options"][value="option1"]')
const semester2 = document.querySelector('input[name="options"][value="option2"]')
const semester3 = document.querySelector('input[name="options"][value="option3"]')
const semester4 = document.querySelector('input[name="options"][value="option4"]')
const semester5 = document.querySelector('input[name="options"][value="option5"]')
const semester6 = document.querySelector('input[name="options"][value="option6"]')

const semesterDiv1Q = document.getElementById('semesterDiv1Q')
const semesterDiv2Q = document.getElementById('semesterDiv2Q')
const semesterDiv3Q = document.getElementById('semesterDiv3Q')
const semesterDiv4Q = document.getElementById('semesterDiv4Q')
const semesterDiv5Q = document.getElementById('semesterDiv5Q')
const semesterDiv6Q = document.getElementById('semesterDiv6Q')

let semesterDiv1Inputs = semesterDiv1Q.querySelectorAll('input')
let semesterDiv2Inputs = semesterDiv2Q.querySelectorAll('input')
let semesterDiv3Inputs = semesterDiv3Q.querySelectorAll('input')
let semesterDiv4Inputs = semesterDiv4Q.querySelectorAll('input')
let semesterDiv5Inputs = semesterDiv5Q.querySelectorAll('input')
let semesterDiv6Inputs = semesterDiv6Q.querySelectorAll('input')


//! Render data from local storage

const inputs = document.querySelectorAll('.GPACalc__input')
inputs.forEach(input => {
     if(input.value === "" && localStorage.getItem(input.id) !== null) {
          input.value = localStorage.getItem(input.id)
     }
})


//! Current GPA

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


//! Max GPA

function calculateMaxGPA() {
     const currentSemester = document.querySelector('input[name="options"]:checked')
     let semester1Total = 0
     let semester2Total = 0
     let semester3Total = 0
     let semester4Total = 0
     let semester5Total = 0
     let semester6Total = 0

     if(currentSemester !== semester1){ semester1Total = calculateSemesterMax(semesterDiv1Inputs)}
     if(currentSemester !== semester2){ semester2Total = calculateSemesterMax(semesterDiv2Inputs)}
     if(currentSemester !== semester3){ semester3Total = calculateSemesterMax(semesterDiv3Inputs)}
     if(currentSemester !== semester4){ semester4Total = calculateSemesterMax(semesterDiv4Inputs)}
     if(currentSemester !== semester5){ semester5Total = calculateSemesterMax(semesterDiv5Inputs)}
     if(currentSemester !== semester6){ semester6Total = calculateSemesterMax(semesterDiv6Inputs)}
     if(currentSemester === semester1){ semester1Total = 13}
     if(currentSemester === semester2){ semester2Total = 13}
     if(currentSemester === semester3){ semester3Total = 13}
     if(currentSemester === semester4){ semester4Total = 13}
     if(currentSemester === semester5){ semester5Total = 14}
     if(currentSemester === semester6){ semester6Total = 14}

     let total = semester1Total + semester2Total + semester3Total + semester4Total + semester5Total + semester6Total
     let average = (4 - ( (total / 80) - 1)).toFixed(2)
     GPAMaxQ.innerHTML = average
}


//* Calculate semester Max

function calculateSemesterMax(semester) {
     let total = 0
     semester.forEach(input => {
          const value = input.value.trim()
          if (value !== "") {
               const numericValue = parseFloat(value)
               if (!isNaN(numericValue)) {
                    total += numericValue
               }
          }
          if(value === "") {
               total += 1
          }
     })
     return total
}


//! Reload page

function reloadAll() {
     calculateMaxGPA()
     calculateTotal()
}


//* Reload upon clicking a button

const semesterButtons = document.querySelectorAll('.GPAcalc__button')

semesterButtons.forEach(button => {
     button.addEventListener("click", (unused) => {
          reloadAll()
     })
})


//* Reload upon changing a value

inputs.forEach(input => {
     input.addEventListener("input", (e) => {
          reloadAll()
     })
})


//* Render Page

reloadAll()