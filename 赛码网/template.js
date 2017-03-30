// http://oj.acmcoder.com/ExamNotice.html
process.stdin.resume()
process.stdin.setEncoding('utf-8')

var input = ''
var input_arr = []

process.stdin.on('data', function(data) {
  input += data
})

// process.stdin.on('end', function() {
//   input_arr = input.split('\n')
//   console.log(input_arr);
// })

process.on('SIGINT', function() {
  input_arr = input.split('\r\n')
  console.log(input_arr);
  process.exit(0)
})
