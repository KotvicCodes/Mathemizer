//

//! Variables

const inputQ = document.getElementById('inputQ')
const findSequenceButtonQ = document.getElementById('findSequenceButtonQ')
const foundSequenceQ = document.getElementById('foundSequenceQ')

const currentSum = 0


//! Solver

//* Event listener

findSequenceButtonQ.addEventListener('click', function() {
     const desiredSum = parseInt(inputQ.value.trim())
     foundSequenceQ.innerHTML = ''
     executeOrder(desiredSum)
})


//* Main function

function executeOrder(target) {
     for(let j = 1; j <= target; j++) {
          findSequences(target, j)
     }
}

function findSequences(target, start, currentSequence = [], currentSum = 0) {
     if(currentSum === target) {
          foundSequenceQ.innerHTML += `<p>${currentSequence.join(' ')}</p>`
          return
     }

     for(let i = start; i <= target; i++) {
          if(i % currentSum === 0 || i === 1) {
               if(currentSum + i <= target) {
                    findSequences(target,  i + 1, currentSequence.concat(i), currentSum + i,)
               }
          }
     }
}