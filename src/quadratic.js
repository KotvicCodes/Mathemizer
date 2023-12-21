//

//! Quadratic equation solver

const aInputQ = document.getElementById('aInputQ')
const bInputQ = document.getElementById('bInputQ')
const cInputQ = document.getElementById('cInputQ')

const rootsQ = document.getElementById('rootsQ')
const answer1Q = document.getElementById('answer1Q')
const answer2Q = document.getElementById('answer2Q')


//* The equation itself
// (a * x * x) + (b * x) + c = 0

let a = aInputQ.value
let b = bInputQ.value
let c = cInputQ.value

let diskriminant = (b * b) - (4 * a * c)
console.log(diskriminant)


//* activating mathemizer

if (aInputQ.value !== '' && bInputQ.value !== '' && cInputQ.value !== '') {
     rootsQValue()

     answer1Q.innerText = answer1QValue()
     answer2Q.innerText = answer2QValue()
}

if (aInputQ.value === '' || bInputQ.value === '' || cInputQ.value === '') {
     rootsQ.innerText = ''
     answer1Q.innerText = ''
     answer2Q.innerText = ''
}


//* Displayed text

function rootsQValue() {
     if (diskriminant < 0) {
          return rootsQ.innerText = "No answer in R"
     }
     else if (diskriminant === 0) {
          return rootsQ.innerText = "D = 0"
     }
     else if (diskriminant > 0) {
          return rootsQ.innerText = "Shakalaka boom"
     }
}


//* answer1Q value

function answer1QValue() {
     let answer1 = (-b + Math.sqrt(diskriminant)) / (2 * a)

     if (diskriminant < 0) {
          return answer1Q.innerText = "null"
     }
     else if (diskriminant === 0 || diskriminant > 0) {
          return answer1
     }
}


//* answer2Q value

function answer2QValue() {
     let answer2 = (-b - Math.sqrt(diskriminant)) / (2 * a)

     if (diskriminant < 0) {
          return answer2Q.innerText = "null"
     }
     else if (diskriminant === 0 || diskriminant > 0) {
          return answer2
     }
}