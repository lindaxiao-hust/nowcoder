// function indexOf(arr, item) {
//   var _index = -1
// 	arr.forEach(function(_item, index) {
//         if(_item === item) {
//             _index = index
//             return
//         }
//     })
//     return _index
// }
//
// console.log(indexOf([ 1, 2, 3, 4 ], 5));

// function sum(arr) {
// 	return arr.reduce(function(_sum, item){
//         return _sum + item
//     }, 0)
// }
//
// console.log(sum([ 1, 2, 3, 4 ]));

// function remove(arr, item) {
// 	var _arr = []
//     arr.forEach(function(_item) {
//         if(_item !== item) {
//             _arr.push(_item)
//         }
//     })
//     return _arr
// }
//
// console.log(remove([1, 2, 3, 4, 2], 2));

// function removeWithoutCopy(arr, item) {
//     var indexArr = []
//     arr.forEach(function(_item, index) {
//         if (_item === item) {
//             indexArr.push(index)
//         }
//     })
//     indexArr.forEach(function(_item, index) {
//         arr.splice(_item-index, 1)
//     })
//     return arr
// }
//
// console.log(removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2));

// function append(arr, item) {
// 	var _arr = []
//     arr.forEach(function(_item) {
//         _arr.push(_item)
//     })
//     _arr.push(item)
//     return _arr
// }
//
// console.log(append([1, 2, 3, 4],  10));

// function truncate(arr) {
// 	var _arr = []
//     for(let i = 0; i < arr.length - 1; i++) {
//         _arr[i] = arr[i]
//     }
//     return _arr
// }
//
// console.log(truncate([1, 2]));

// function prepend(arr, item) {
// 	var _arr = arr.slice(0)
//     _arr.unshift(item)
//     return _arr
// }
//
// console.log(prepend([1, 2, 3, 4], 10));

// function duplicates(arr) {
// 	var _arr = []
//     var __arr = []
//     arr.forEach(function(item) {
//         if(_arr.indexOf(item) === -1) {
//             _arr.push(item)
//         } else {
//             if(__arr.indexOf(item) === -1) {
//                 __arr.push(item)
//             }
//         }
//     })
//     return __arr
// }
//
// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort());

// function functions(flag) {
//     if (flag) {
//       function getValue() { return 'a'; }
//     } else {
//       function getValue() { return 'b'; }
//     }
//
//     return getValue();
// }
//
// console.log(functions(false));

// function parse2Int(num) {
//     var _num = ''
//     var hasNum = false
//     for (var i = 0; i < num.length; i++) {
//         if (isNaN(parseInt(num[i]))) {
//             if (hasNum) {
//                 break
//             }
//         } else {
//             hasNum = true
//             _num = _num.concat(num[i])
//         }
//     }
//     return _num
// }
//
// // console.log(parse2Int('12'));
// // console.log(parse2Int('12px'));
// console.log(parse2Int('0x12'));

function count(start, end) {
    console.log(start++)
    var _time = setInterval(function() {
      if(start > end) {
        clearInterval(_time)
      } else {
        console.log(start++)
      }
    }, 100)

    return {
        cancel: function() {
          clearInterval(_time)
        }
    }
}

count(1, 5).cancel()
