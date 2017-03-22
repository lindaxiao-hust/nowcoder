// DNA
var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var count = 0
rl.on('line', function(line) {
  var str1 = line.split(' ')[0]
  var str2 = line.split(' ')[1]

  for(var i = 0; i < str1.length; i++) {
    if(!isMatch(str1[i], str2[i])) {
      count++
    }
  }
  console.log(count);
})

function isMatch(x, y) {
  if(x + y === 'AT' || x + y === 'TA' || x + y === 'CG' || x + y === 'GC') {
    return true
  }
  return false
}
