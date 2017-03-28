var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var result = []
rl.on('line', function(line) {
 var str = line.split('?')[1]
 str.split('&').forEach(function(item) {
   var value = item.split('=')[1] === undefined ? '' : item.split('=')[1]
   result.push({
     name: item.split('=')[0],
     value: value
   })
 })
 QuerySearch('e')
})

function QuerySearch(name) {
  result.some(function(item) {
    if(item.name === name) {
      console.log(item.value);
      return false
    }
  })
}
