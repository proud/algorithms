const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

rl.on('line', function (line) {
  const array = line.split(' ').map(Number)
  bubbleSort(array)
  console.log(array.join(' '))
  process.exit(0)
})

function swap (array, i, j) {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

function bubbleSort (array) {
  while (true) {
    let swapped = false
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        swapped = true
      }
    }
    if (!swapped) break
  }
}

module.exports = bubbleSort
