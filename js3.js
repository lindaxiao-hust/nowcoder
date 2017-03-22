// https://www.nowcoder.com/questionTerminal/66aa4aada59e4da5aac67cacc8b495a2
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";
var n;
var s;
var l;

process.stdin.on('data', function(data) {
    input += data;
});

function do_something(n, s, l) {
    //你的代码
    var count_per = Math.floor((l + 1) / (s + 1))
    if (count_per % 13 === 0) {
        count_per--
    }

    var count = Math.ceil(n / count_per)
    var more = n % count_per

    // 如果剩下来的歌为13的倍数，且无法向前面的专辑借歌，则需要增加一张专辑：
    // 1. 一张专辑的歌曲容量肯定比剩下来的歌多，如果只多1，增加一张专辑
    // 2. 如果当前专辑数为1，增加一张专辑
    if (more != 0 && more % 13 === 0 && (count_per - more === 1 || count === 1) {
            count++
        }
        console.log(count);
    }

    process.stdin.on('end', function() {
        input_array = input.split("\n");
        var nLine = 0;
        while (nLine < input_array.length) {
            var line = input_array[nLine++].trim();
            if (line === '') {
                continue;
            }
            var input_arrays = line.split(' ');
            n = +input_arrays[0];
            s = +input_arrays[1];
            l = +input_arrays[2];

            do_something(n, s, l);

        }
    });

    function compare(a, b) {
        return a - b
    }
