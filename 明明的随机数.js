var readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var line_count = 0
var line_counts = 0
var arr = []
rl.on('line', function(line) {
  line_count++
  if(line_count == 1) {
    line_counts = +line
  } else {
    arr.push(line)
  }

  if(line_count === line_counts+1) {
    var tmp_arr = []
    arr.forEach(function(item) {
      if(tmp_arr.indexOf(item) === -1) {
        tmp_arr.push(item)
      }
    })

    tmp_arr.sort(function(a, b) {
      return a - b
    })

    tmp_arr.forEach(function(item) {
      console.log(item);
    })

    line_count = 0
    arr = []
  }
})
