var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var arr = []
rl.on('line', function(line) {
  var w = line.trim().split(' ')[0]
  var x = line.trim().split(' ')[1]
  var y = line.trim().split(' ')[2]
  var z = line.trim().split(' ')[3]

  for(var i = w; i <= x; i++) {
    for(var j = y; j <= z; j++) {
      if(arr.indexOf(i/j) === -1) {
        arr.push(i/j)
      }
    }
  }
  console.log(arr.length);
})
