// 模拟 页码统计
var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function(line) {
  var n = +line

})

function getCount(x, y) {
  var strx = x + ''
  var stry = y + ''
  var start = 0
  var count = 0
  while (true) {
    var idx = strx.indexOf(stry, start)
    if (idx === -1) {
      break
    } else {
      count++
      start = idx+1
    }
  }
  return count
}
