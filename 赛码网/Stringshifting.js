process.stdin.resume()
process.stdin.setEncoding('utf-8')

var input = ''
process.stdin.on('data', function(data) {
  input += data
})

process.on('SIGINT', function() {
// process.stdin.on('end', function() {
  var n = input.trim().split(' ')[0]
  var m = input.trim().split(' ')[1]
  var arr = []
  for(var i = 1; i <= n; i++) {
    arr.push(i)
  }
  arr.sort()
  console.log(arr[m-1]);
  process.exit(0)
})
