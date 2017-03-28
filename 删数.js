// 约瑟夫环问题，数学递推公式f（n）=（f（n-1）+m）%n
var readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function(line) {
  var n = +line
  var idx = 0
  for(var i = 2; i <= n; i++) {
    idx = (idx+3)%i
  }
  console.log(idx);
})
