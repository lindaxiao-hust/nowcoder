// 好多鱼问题
var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var line_count = 0
var minSize = 0
var maxSize = 0
var n = 0
var fishSize = []
var newFish = []
rl.on('line', function(line) {
  line_count++
  if(line_count === 1) {
    var arr = line.trim().split(' ')
    minSize = +arr[0]
    maxSize = +arr[1]
  } else if(line_count === 2) {
    n = +(line.trim())
  } else if(line_count === 3) {
    fishSize = line.trim().split(' ')

    //执行操作
    // 判断x是否为y的2-10倍数，或者y是否为x的2-10倍数
    function compare(x, y) {
      // for(var i = 2; i <= 10; i++) {
      //   if(x/y === i || y/x === i) {
      //     return true
      //   }
      // }
      // return false
      if((x >= 2*y && x <= 10*y) || (y >= 2*x && y <= 10*x)) {
        return true
      }
      return false
    }

    // 遍历鱼的大小的数组
    function fishSizeX(x) {
      var isOk = true
      fishSize.some(function(item) {
        if(compare(x, +item)) {
          isOk = false
          return true;
        }
      })
      return isOk
    }

    // 遍历新增鱼的大小范围
    for(var j = minSize; j <= maxSize; j++) {
      if(fishSizeX(j)) {
        // fishSize.push(j)
        newFish.push(j)
      }
    }

    console.log(newFish.length);

    newFish = []
    line_count = 0
  }
})
