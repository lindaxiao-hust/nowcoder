var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function(line) {
  // todo
})

//每读一行，即一行输入结束敲回车，执行事件line对应的方法
rl.on('line', function(line) {
  var tokens = line.split(' ')
  //直接使用console.log进行输出，一次输出即为一行，输出多行可多次使用console.log
  console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
})

/*********************自实现多行输入***************************/
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

/*********************官方多行输入***************************/
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});

var n = -1;// 初始状态为负数，表示还没开始读取
var ans = 0;
var cur_line = 0;
rl.on('line', function(line){ // javascript每行数据的回调接口
   if (n < 0) { // 测试用例第一行读取n
       n = parseInt(line.trim())
   } else {
       // 矩阵数据读取
   	   var tokens = line.split(' ');
       for (var i = 0; i < tokens.length; ++i) {
           // 题目逻辑求和，边读取边计算
           ans += parseInt(tokens[i]);
       }
       // 记录当前读取的行数
       cur_line += 1;
   }

   // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
   if (n === cur_line) {
       // 输出结果
       console.log(ans);
       // 重新初始化相关变量
       n = -1;
       ans = 0;
       cur_line = 0;
   }
});

/*********************另一种输入方式***************************/
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
