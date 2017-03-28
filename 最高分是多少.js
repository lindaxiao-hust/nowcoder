var readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var n = 0
var m = 0
var line_count = 0
var score_arr = []
var opt_arr = []
rl.on('line', function(line) {
  line_count++
  if (line_count === 1) {
    n = +(line.split(' ')[0])
    m = +(line.split(' ')[1])
  } else if (line_count === 2) {
    score_arr = line.trim().split(' ')
  } else {
    opt_arr.push(line)
  }
  if (line_count === m + 2) {
    opt_arr.forEach(function(item) {
      var tmp_item = item.split(' ')
      if(tmp_item[0] === 'Q') {
        var a = 0
        var b = 0
        if(+tmp_item[1] > +tmp_item[2]) {
          a = +tmp_item[1]
          b = +tmp_item[2]
        } else {
          a = +tmp_item[2]
          b = +tmp_item[1]
        }
        console.log(findMax(b, a));
      } else if(tmp_item[0] === 'U') {
        upd(+tmp_item[1], +tmp_item[2])
      }
    })
    // console.log(score_arr);

    line_count = 0
    score_arr = []
    opt_arr = []
  }
})

function findMax(start, end) {
  var tmp = score_arr.slice(start-1, end)
  var max_num = 0
  tmp.forEach(function(item) {
    if(+item > max_num) {
      max_num = +item
    }
  })
  return max_num
  // return Math.max(...tmp)
}

function upd(id, newNum) {
  score_arr[id-1] = newNum
}
