var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var arr = []

rl.on('line', function(line) {
  var sum = +line[0]
  for(var i = 1; i < line.length; i++) {
    if(line[i] === '*') {
      sum *= +line[i+1]
    } else if(line[i] === '+') {
      sum += +line[i+1]
    } else if(line[i] === '-') {
      sum -= +line[i+1]
    }
  }
  console.log(sum);
  arr = []
})
