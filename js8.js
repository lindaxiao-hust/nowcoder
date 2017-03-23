// 超级素数幂
var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var result = ''
rl.on('line', function(line) {
  var n = +line
  for(var i = 2; ; i++) {
    var tmp = Math.pow(n, 1.0/i)
    if(tmp < 2) {
      result = 'No'
      break
    } else if(!check(tmp)) {
      continue
    } else if(!isPrime(tmp)) {
      continue
    } else {
      result = tmp + ' ' + i
      break
    }
  }
  console.log(result);

})

// 判断是否为素数
function isPrime(x) {
  if(x < 2) {
    return false
  }
  for(var i = 2; i <= Math.sqrt(x); i++) {
    if(x%i === 0) {
      return false
    }
  }
  return true
}

// 检查是否为整数
function check(x) {
  if(Math.floor(x) === Math.ceil(x)) {
    return true
  }
  return false
}
