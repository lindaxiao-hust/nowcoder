// 循环单词
var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var line_count = 0
var n = 0
var word = []
var result_count = 0
rl.on('line', function(line) {
  line_count++
  if(line_count === 1) {
    n = +line
  } else if(line_count <= n+1){
    word.push(line)
  }
  if(line_count === n+1) {
    var noCircle = []
    word.forEach(function(word_item) {
      var findCircle = false
      noCircle.some(function(item) {
        if(isCircleWord(item.val, word_item)) {
          findCircle = true
          item.num++
          return true
        }
      })
      if(!findCircle) {
        noCircle.push({
          val: word_item,
          num: 0
        })
      }
    })
    noCircle.forEach(function(item) {
      if(item.num >= 1) {
        result_count++
      }
    })
    console.log(result_count);
    console.log(noCircle.length);

    word = []
    result_count = 0
    line_count = 0
  }
})

function isCircleWord(x, y) {
  if(x.length === y.length) {
    var len = x.length
    var idxArr = []
    var idx = y.indexOf(x[0])
    var isCircle = false
    while(idx !== -1) {
      idxArr.push(idx)
      idx = y.indexOf(x[0], idx+1)
    }

    idxArr.some(function(item) {
      var tmp = y.slice(item) + y.slice(0, item)
      if(tmp === x) {
        isCircle = true
        return true
      }
    })
    return isCircle
  }
  return false
}
