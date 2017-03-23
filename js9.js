var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var n = 0
var l = 0
rl.on('line', function(line) {
    n = +(line.split(' ')[0])
    l = +(line.split(' ')[1])
    var idx = 0
    var found = false
    var result = []

    // 分成i个
    var len = n / 2 > 100 ? 100 : Math.ceil(n / 2)
    for (var i = l; i <= len; i++) {
        var tmp = n / i
        if (isEven(i)) {
            //tmp需为.5
            if (!leftHalf(i, n)) {
                continue
            } else {
                if (result.length === 0) {
                    idx = Math.floor(tmp) - i / 2 + 1
                    while (idx < Math.ceil(tmp) + i / 2) {
                        result.push(idx)
                        idx++
                    }
                    found = true
                }
                break
            }
        } else {
            // 若分成奇数个，则要能整除
            if (!noPoint(tmp)) {
                continue
            } else {
                if (result.length === 0) {
                    idx = tmp - Math.floor(i / 2)
                    while (idx < tmp + Math.ceil(i / 2)) {
                        result.push(idx)
                        idx++
                    }
                    found = true
                }
                break
            }
        }
    }
    if (found) {
        console.log(result.join(' '));
    } else {
        console.log('No');
    }
})

function isEven(x) {
    if (x % 2 === 0) {
        return true
    }
    return false
}

function noPoint(x) {
    if (Math.ceil(x) === Math.floor(x)) {
        return true
    }
    return false
}

function leftHalf(x, y) {
    return x * Math.floor(y / x) + x / 2 === y
}
