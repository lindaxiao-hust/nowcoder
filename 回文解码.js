process.stdin.resume()
process.stdin.setEncoding('utf-8')

var input = ''
process.stdin.on('data', function(data) {
  input += data
})

// process.on('SIGINT', function() {
process.stdin.on('end', function() {
  var input_arr = input.split('\n')
  var str = input_arr[0].trim()
  var opt_count = +(input_arr[1])
  for(var i = 2; i <= 1+opt_count; i++) {
    var p = +(input_arr[i].split(' ')[0])
    var l = +(input_arr[i].split(' ')[1])
    var tmp = str.substr(p, l).split('').reverse().join('')
    str = str.substring(0, p+l) + tmp + str.substring(p+l)
  }
  console.log(str);
  // process.exit(0)
})
