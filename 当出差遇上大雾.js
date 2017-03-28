var readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var M = 1000
var sche = [
  [0, 2, 10, 5, 3, M],
  [M, 0, 12, M, M, 10],
  [M, M, 0, M, 7, M],
  [2, M, M, 0, 2, M],
  [4, M, M, 1, 0, M],
  [3, M, 1, M, 2, 0]
]
var line_count = 0
var x = 0
var y = 0
var result = []
rl.on('line', function(line) {
  line_count++
  if(line_count === 1) {
    x = +line
  } else if(line_count === 2) {
    y = +line
    if(y !== 0) {
      for(var i = 0; i < 6; i++) {
        sche[i][y-1] = M
      }
    }
    findWay('5')
    var sum = 0
    result.forEach(function(item) {
      var arr = item.split(', ')
    })
    console.log(result);

    line_count = 0
  }

})

// function findWay(x) {
//   var arr = []
//   for(var i = 0; i < 6; i++) {
//     if(sche[i][x] != M && i+1 != x) {
//       arr.push(i+1)
//     }
//   }
//   return arr
// }

function findWay(arr_gone) {
  var m = arr_gone[arr_gone.length-1]
  for(var i = 0; i < 6; i++) {
    if(sche[m-1][i] != M && i+1 != m && (arr_gone.indexOf(i+1) === -1)) {
      if(i+1 === x) {
        result.push(arr_gone+ ', ' + x)
      }
      findWay(arr_gone+ ', ' +(i+1))
    }
  }
}
