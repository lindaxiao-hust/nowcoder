var readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function(line) {
  // console.log(Array.from(new Set(line)).join(''));
  var str = ''
  for(var i = 0; i < line.trim().length; i++) {
    if(str.indexOf(line[i]) === -1) {
      str += line[i]
    }
  }
  console.log(str);
})
