var readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var result = ''
rl.on('line', function(line) {
  var arr = line.split(',')
  var a = +arr[0]
  var b = +arr[1]
  console.log(reverseAdd(a, b));

})

function reverseAdd(a, b) {
  if((a < 1 || a > 70000) && (b < 1 || b > 70000)) {
    return -1
  } else {
    var stra = a + ''
    var strb = b + ''
    var arra = stra.split('').reverse()
    var arrb = strb.split('').reverse()
    stra = arra.join('')
    strb = arrb.join('')
    return (+stra) + (+strb)
  }
}
