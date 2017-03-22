var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//每读一行，即一行输入结束敲回车，执行事件line对应的方法
rl.on('line', function(line) {
  var tokens = line.split(' ')
  //直接使用console.log进行输出，一次输出即为一行，输出多行可多次使用console.log
  console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
})

// 获取三行输入的值，输出它们的和
var countLine = 1
var tokens = []
rl.on('line', function(line) {
  tokens.push(line)
  if(countLine === 3) {
    //求和
    console.log(
      tokens.reduce(function(sum, item) {
        return sum + parseInt(item)
      }, 0)
    );
    countLine = 1
    tokens = []
  } else {
    countLine++
  }
})

/************************************************/
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;

    while(nLine < input_array.length){
        var line = input_array[nLine++].trim();
        if(line === ''){
            continue;
        }
        var s = line;
        var n = +input_array[nLine++];
        while(n--){
            var input_arrays = input_array[nLine++].trim().split(' ');
            var p = +input_arrays[0];
            var l = +input_arrays[1];

            //你的代码

        }
    }
});
