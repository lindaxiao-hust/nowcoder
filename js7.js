// 连续整数
var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var line_count = 0
var n = 0
var num = []
var result = ''
rl.on('line', function(line) {
  line_count++
  if(line_count === 1) {
    n = +line
  } else {
    num = line.trim().split(' ')
    num = removeSame(num)
    num.sort(compare)

    var min_num = +num[0]
    var max_num = +num[num.length-1]
    if(max_num - min_num + 1 === num.length) {
      result = max_num + 1 + ''
      if(min_num !== 1) {
        result = min_num - 1 + ' ' + result
      }
    } else {
      if(max_num - min_num + 1 - num.length === 1) {
        for(var i = 1; i < num.length; i++) {
          if(+num[i] === +num[i-1] + 2) {
            result = +num[i] - 1 + ''
            break
          }
        }
      } else {
        result = 'mistake'
      }
    }
    console.log(result);

    line_count = 0
    n = 0
    num = []
  }
})

function compare(a, b) {
  return a - b
}

function removeSame(arr) {
  var tmp = []
  arr.forEach(function(item) {
    if(tmp.indexOf(item) === -1) {
      tmp.push(item)
    }
  })
  return tmp
}
