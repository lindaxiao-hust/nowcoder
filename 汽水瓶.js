var readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var str = ''
rl.on('line', function(line) {
  if(line === '0') {
    var arr = str.trim().split(' ')
    arr.forEach(function(item) {
      cal(+item)
    })

    str = ''
  } else {
    str += line + ' '
  }
})

function cal(x) {
  var result = x
  var count = 0
  while(result > 1) {
    if(result == 2) {
      count++
      break
    } else {
      count += Math.floor(result/3)
      result = Math.floor(result/3) + result%3
    }
  }
  console.log(count);
}

// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.on('line',function(line){
//     var count = 0;
//     var n = parseInt(line.trim());
//     while(n>=2){
//         if(n==2){
//             count+=1;
//             break;
//         }else{
//             count+=Math.floor(n/3);
//             n = Math.floor(n/3) + n%3;
//         }
//     }
//     console.log(count);
// })
// rl.on('close',function(){
//     process.exit(0);
// })
