var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function(line) {
  trans(line)
})

function trans(x) {
  console.log(parseInt(x, 16));
}
