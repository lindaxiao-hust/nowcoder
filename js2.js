// https://www.nowcoder.com/questionTerminal/17517002460f453eb97a73439fc10ec8
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function(data) {
    input += data;
});

process.stdin.on('end', function() {
    input_array = input.split("\n");
    var nLine = 0;

    while (nLine < input_array.length) {
        var line = input_array[nLine++].trim();
        if (line === '') {
            continue;
        }
        var s = line;
        var n = +input_array[nLine++];
        while (n--) {
            var input_arrays = input_array[nLine++].trim().split(' ');
            var p = +input_arrays[0];
            var l = +input_arrays[1];

            //你的代码
            var arr = s.split('')
            var str = s.substr(p, l).split('').reverse().join('')
            arr.splice(p + l, 0, str)
            s = arr.join('')
        }
        console.log(s)
    }
});
