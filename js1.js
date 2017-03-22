/**
 ** 输入两个整数 n 和 m，从数列1，2，3.......n 中随意取几个数,使其和等于 m ,要求将其中所有的可能组合列出来
 ** 输入：每个测试输入包含2个整数,n和m
 ** 输入例子：
 ** 5 5
 ** 输出：按每个组合的字典序排列输出,每行输出一种组合
 ** 输出例子：
 ** 1 4
 ** 2 3
 ** 5
 **/

// 背包问题
var readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', function(line) {
    var tokens = line.split(' ')
    var sumsArr = []
    findSumArr(parseInt(tokens[0]), parseInt(tokens[1]), [], sumsArr)
    sumsArr.sort().forEach(function(item) {
        console.log(item);
    })
})

function findSumArr(n, m, sumArr, sumsArr) {
    if (m < 1) { //m===0
        sumsArr.push(sumArr.sort().join(' '))
        return
    }
    if (n < 1) {
        return
    }
    // 如果n大于m，则将n赋值为m（大于m的值无用
    if (n > m) {
        n = m
    }

    // 注意：这里不能直接使用 tmpArr=sumArr
    // var tmpArr = []
    // sumArr.forEach(function(item) {
    //     tmpArr.push(item)
    // })
    var tmpArr = sumArr.slice(0)
    // 1. 不将n放入数组
    findSumArr(n - 1, m, sumArr, sumsArr)
    // 2. 将n放入数组
    tmpArr.push(n)
    findSumArr(n - 1, m - n, tmpArr, sumsArr)
}
