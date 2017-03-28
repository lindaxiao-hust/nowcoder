var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', function(line) {
  var versionArr = line.split(' ')
  // 排序使版本号从大到小
  versionArr.sort(function(a, b) {
    var aArr = a.split('.'),
      bArr = b.split('.');

    for (var i = 0; i < 3; i++) {
      var na = parseInt(aArr[i], 10),
        nb = parseInt(bArr[i], 10);

      if (na < nb) {
        return -1;
      } else if (na > nb) {
        return 1;
      }
    }
  })
  console.log(versionArr);
})
