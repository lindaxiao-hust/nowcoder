var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var arrValue = []
var arrIdx = []
var line_count = 0
var arr = []
rl.on('line', function(line) {
  var n = 0
  var seq = []
  line_count++
  if(line_count === 1) {
    n = +line
  } else if(line_count === 2) {
    seq = line.split(' ')
    seq.forEach(function(item, index) {
      if(arrValue.indexOf(item) === -1) {
        arrValue.push(item)
        arrIdx.push(index)
      } else {
        arrIdx[arrValue.indexOf(item)] = index
      }
    })
    for(var i = 0; i < arrValue.length; i++) {
      arr.push({
        val: arrValue[i],
        idx: arrIdx[i]
      })
    }
    arr.sort(function(x, y) {
      if(x.idx < y.idx) {
        return -1
      } else if(x.idx > y.idx) {
        return 1
      } else {
        return 0
      }
    })
    arr.forEach(function(item) {
      console.log(item.val);
    })
    line_count = 0
    arrValue = []
    arrIdx = []
  }
})
