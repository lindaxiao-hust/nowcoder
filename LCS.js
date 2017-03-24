// https://segmentfault.com/a/1190000002641054
var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var line_count = 0
var str1 = ''
var str2 = ''
var c = []
rl.on('line', function(line) {
  line_count++
  if (line_count === 1) {
    str1 = line
  } else if (line_count === 2) {
    str2 = line

    // lengthOfLCS(str1, str2)
    // print(c, str1, str2, str1.length, str2.length)

    console.log(lengthofLCSStr(str1, str2));

    line_count = 0
    c = []
  }
})

// 最长公共子序列
function lengthOfLCS(str1, str2) {
  /* 构造二维数组c[][]记录X[i]和Y[j]的LCS长度 (i,j)是前缀
   * c[i][j]=0; 当 i = j = 0;
   * c[i][j]=c[i-1][j-1]+1; 当 i = j > 0; Xi == Y[i]
   * c[i][j]=max(c[i-1][j],c[i][j+1]); 当 i = j > 0; Xi != Y[i]
   * 需要计算 m*n 个子问题的长度 即 任意c[i][j]的长度
   * -- 填表过程
   */
  var i = 0
  var j = 0
  // 初始化
  for (i = 0; i <= str1.length; i++) {
    c[i] = new Array()
    for (j = 0; j <= str2.length; j++) {
      c[i][j] = 0
    }
  }

  for (i = 1; i <= str1.length; i++) {
    for (j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        c[i][j] = c[i - 1][j - 1] + 1
      } else if (c[i - 1][j] > c[i][j - 1]) {
        c[i][j] = c[i - 1][j]
      } else {
        c[i][j] = c[i][j - 1]
      }
    }
  }

  //打印c数组
  for (i = 0; i <= str1.length; i++) {
    var result = ''
    for (j = 0; j <= str2.length; j++) {
      result += c[i][j] + ' '
    }
    console.log(result);
  }
  return c
}

function print(arr, str1, str2, i, j) {
  if(i == 0 || j == 0) {
    return
  }
  if(str1[i-1] === str2[j-1]) {
    console.log(str1[i-1]);
    print(arr, str1, str2, i-1, j-1)
  } else if(arr[i-1][j] >= arr[i][j-1]) {
    print(arr, str1, str2, i-1, j)
  } else {
    print(arr, str1, str2, i, j-1)
  }
}

// 最长公共字串
function lengthofLCSStr(str1, str2) {
  /* 构造二维数组c[][]记录X[i]和Y[j]的LCS长度 (i,j)是前缀
   * c[i][j]=0; 当 i = j = 0;
   * c[i][j]=c[i-1][j-1]+1; 当 i = j > 0; Xi == Y[i]
   * c[i][j]=max(c[i-1][j],c[i][j+1]); 当 i = j > 0; Xi != Y[i]
   * 需要计算 m*n 个子问题的长度 即 任意c[i][j]的长度
   * -- 填表过程
   */
  var i = 0
  var j = 0
  // 初始化
  for (i = 0; i <= str1.length; i++) {
    c[i] = new Array()
    for (j = 0; j <= str2.length; j++) {
      c[i][j] = 0
    }
  }

  var maxLen = 0
  var maxIndex = 0
  for(i = 1; i <= str1.length; i++) {
    for(j = 1; j <= str2.length; j++) {
      if(str1[i-1] === str2[j-1]) {
        c[i][j] = c[i-1][j-1] + 1
        if(c[i][j] > maxLen) {
          maxLen = c[i][j]
          maxIndex = i + 1 - maxLen
        }
      }
    }
  }

  //打印c数组
  for (i = 0; i <= str1.length; i++) {
    var result = ''
    for (j = 0; j <= str2.length; j++) {
      result += c[i][j] + ' '
    }
    console.log(result);
  }
  return maxLen + ' ' + maxIndex
}
