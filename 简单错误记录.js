process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = [];
var result = []
var result_count = []

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
  input_array = input.split('\n')
  input_array.forEach(function(item) {
    var tmp = item.trim().split('\\')
    var tmp_last = tmp[tmp.length-1]
    if(result.indexOf(tmp_last) === -1) {
      result.push(tmp_last)
      result_count.push(1)
    } else {
      result_count[result.indexOf(tmp_last)]++
    }
  })
  result.forEach(function(item, idx) {
    var tmp1 = item.split(' ')[0]
    var tmp2 = item.split(' ')[1]
    if(tmp1.length > 16) {
      tmp1 = tmp1.slice(tmp1.length-16)
    }
    result[idx] = {
      value: tmp1 + ' ' + tmp2 + ' ' + result_count[idx],
      count: result_count[idx]
    }
  })
  result.sort(function(a, b) {
    return b.count - a.count
  })
  result.some(function(item, idx) {
    console.log(item.value);
    if(idx >= 7) {
      return true
    }
  })
})
