var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var a = 0
var b = 0
var c = 0

rl.on('line', function(line) {
  var tokens = line.split(' ')
  a = +(tokens[0])
  b = +(tokens[1])
  c = +(tokens[2])

  var count = 0
  var aa = 0
  var bb = 0
  aa = div(a, c)
  bb = div(b, c)


  // for(var i = a; i < b; i++) {
  //   if(i%c === 0) {
  //     count++
  //   }
  // }
  count = aa+bb
  if(a*b <= 0) {
    count = aa+bb+1
  } else {
    count = Math.abs(aa-bb)
  }
  // if((a <= 0 && b >= 0) || (a >= 0 && b <= 0)) {
  //   count++
  // }
  console.log(count);

})

function div(x, y) {
  // if(x < 0) {
  //   return Math.ceil(x/y)
  // } else {
  //   return Math.floor(x/y)
  // }
  return Math.floor(Math.abs(x)/y)
}
