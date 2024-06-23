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
     findSequences(desiredSum)
})


//* Main function

function findSequences(target, currentSequence = [], currentSum = 0, start = 1) {
     if(currentSum === target) {
          foundSequenceQ.innerHTML += `<p>${currentSequence.join(' ')}</p>`
          return
     }

     for(let i = start; i <= target; i++) {
          if(i % currentSum === 0 || i === 1) {
               if(currentSum + i <= target) {
                    findSequences(target, currentSequence.concat(i), currentSum + i, i + 1)
               }
          }
     }
}