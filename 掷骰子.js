var readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var state = {
  left: 1,
  right: 2,
  front: 3,
  back: 4,
  up: 5,
  down: 6
}
var result = ''
rl.on('line', function(line) {
  // console.log(reverseAdd(123, 456));
  var arr = line.trim().split('')
  arr.forEach(function(item) {
    updateState(item)
  })
  for(var i in state) {
    result += state[i]
  }
  console.log(result);

})

function updateState(x) {
  var tmp = 0
  if(x === 'L') {
    tmp = state.left
    state.left = state.up
    state.up = state.right
    state.right = state.down
    state.down = tmp
  } else if(x === 'R') {
    tmp = state.left
    state.left = state.down
    state.down = state.right
    state.right = state.up
    state.up = tmp
  } else if(x === 'B') {
    tmp = state.up
    state.up = state.front
    state.front = state.down
    state.down = state.back
    state.back = tmp
  } else if(x === 'F') {
    tmp = state.up
    state.up = state.back
    state.back = state.down
    state.down = state.front
    state.front = tmp
  } else if(x === 'A') {
    // tmp = state.back
    // state.back = state.left
    // state.left = state.front
    // state.front = state.right
    // state.right = tmp
    tmp = state.front
    state.front = state.left
    state.left = state.back
    state.back = state.right
    state.right = tmp
  } else if(x === 'C') {
    // tmp = state.back
    // state.back = state.right
    // state.right = state.front
    // state.front = state.left
    // state.left = tmp
    tmp = state.front
    state.front = state.right
    state.right = state.back
    state.back = state.left
    state.left = tmp
  }
}



// function reverseAdd(a, b) {
//   if((a < 1 || a > 70000) && (b < 1 || b > 70000)) {
//     return -1
//   } else {
//     var stra = a + ''
//     var strb = b + ''
//     var arra = stra.split('').reverse()
//     var arrb = strb.split('').reverse()
//     stra = arra.join('')
//     strb = arrb.join('')
//     return (+stra) + (+strb)
//   }
// }

// int reverseAdd(int a, int b) {
//   String a =
// }
