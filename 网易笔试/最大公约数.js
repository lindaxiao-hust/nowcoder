var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function(line) {
  var a = +line.split(' ')[0]
  var b = +line.split(' ')[1]
  var min = a < b ? a : b
  for(var i = min; i >= 1; i--) {
    if(a%i === 0 && b%i === 0) {
      console.log(i);
      break
    }
  }
})
