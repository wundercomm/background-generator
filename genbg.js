const trianglify = require('trianglify')
const fs = require('fs')

const cellsize = Math.random() * 200 + 40
const colorf = Math.random() * 0.1
const variance = Math.random() + 0.5

console.log( "cellsize: " + cellsize )
console.log( "colorf: " + colorf )
console.log( "variance: " + variance )

const svg = trianglify({
  width: 1920,
  height: 1080,
  cellSize: Math.random() * 100 + 40,
  // xColors: ['rgb(66, 42, 88, 0.99)', 'rgb(16, 43, 107, 0.99)'],
  xColors: ['#422a58', '#102b6b'],
  variance: variance,
  colorFunction: trianglify.colorFunctions.shadows(colorf),
  strokeWidth: 1
}).toSVG()

// Save the string to a file
fs.writeFileSync('trianglify.svg', svg.toString())
