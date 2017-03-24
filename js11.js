// 最长公共字串
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var line_count = 0
var str1 = ''
var str2 = ''
rl.on('line', function(line) { // javascript每行数据的回调接口
  line_count++
  if (line_count === 1) {
    str1 = line
  } else if (line_count === 2) {
    str2 = line
    var count = 0
    for (var i = 0; i < str1.length; i++) {
      for (var j = 0; j < str2.length; j++) {
        for (var k = 0; str1[i + k] && str2[j + k] && str1[i + k] === str2[j + k]; k++);
        if (k > count) {
          count = k
        }
      }
    }
    console.log(count);
    line_count = 0
  }
});
