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

// function count(start, end) {
//     console.log(start++)
//     var _time = setInterval(function() {
//       if(start > end) {
//         clearInterval(_time)
//       } else {
//         console.log(start++)
//       }
//     }, 100)
//
//     return {
//         cancel: function() {
//           clearInterval(_time)
//         }
//     }
// }
//
// count(1, 5).cancel()


// console.log(Array.isArray(1));

// var global = this;
//
// var sillyFunction = function (recursed) {
//     if (!recursed) { return arguments.callee(true); }
//     if (this !== global) {
//         console.log("This is: " + this);
//     } else {
//         console.log("This is the global");
//     }
// }
//
// sillyFunction();

// var str = "cat,hat,bat"
// var reg = /a/g
//
// var result = reg.exec(str)
// console.log(result);
// console.log(result.index);
// console.log(result.input);
// console.log(reg.lastIndex);
//
// console.log(reg.exec(str)[0]);
// console.log(reg.test(str));
// console.log(reg.test(str));

// var emailReg = /^\w+([\.-]\w+)*@\w+([\.-]\w+)*(\.\w{2,3})+$/
//
// var str = 'lindaxiao_hust@163.com'
//
// console.log(emailReg.test(str));
// console.log(emailReg.lastIndex);

// var phoneReg = /^1[3|4|5|7|8]\d{9}$/
//
// var str = '13377874490'
// console.log(phoneReg.test(str));
// console.log(phoneReg.lastIndex);

// var Calculator = function(num1, num2) {
//   this.num1 = num1
//   this.num2 = num2
// }
//
// Calculator.prototype = {
//   add: function(x, y) {
//     return x+y
//   },
//   sub: function(x,y) {
//     return x-y
//   }
// }
//
// console.log(new Calculator().add(1, 2));

// for(i in foo) {
//   if(foo.hasOwnProperty(i)) {
//     console.log(i);
//   }
// }

// function speak(fn, obj) {
// 	for(item in obj) {
//         this[item] = obj[item]
//     }
//     return fn()
// }
//
// console.log(speak(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'}));

// function functionFunction(str) {
//     var f = (tmp) => functionFunction(str + ', ' + tmp)
//     f.valueOf = () => str
//     return f
// }

// function functionFunction(str) {
// 	/*var f = (tmp) => functionFunction(str+', '+tmp)
//     f.valueOf = () => str*/
//     var f = (tmp) => str+', '+tmp
//     return f
// }

// console.log(functionFunction('hello')('world'));
// function f() {
//   return 1
// }
// f.valueOf = function() {
//   return 2
// }
// console.log(f);

// function makeClosures(arr, fn) {
// 	var result = []
    // for(let i = 0; i < arr.length; i++) {
    //     result[i] = function() {
    //         return fn(arr[i])
    //     }
    // }

    // arr.forEach(function(item) {
    //   result.push(function(){
    //     return fn(item)
    //   })
    // })

//     for(var i = 0; i < arr.length; i++) {
//       (function(n) {
//         result[n] = function() {
//           return fn(arr[n])
//         }
//       })(i)
//     }
//     return result
// }
//
// var arr = [1, 2, 3];
// var square = function (x) {
// 	return x * x;
// };
// var funcs = makeClosures(arr, square);
// console.log(funcs[2]());

// function partial(fn, str1, str2) {
// 	return function(str3) {
//         return fn(str1, str2, str3)
//     }
// }
//
// var sayIt = function(greeting, name, punctuation) {     return greeting + ', ' + name + (punctuation || '!'); };
// console.log(partial(sayIt, 'Hello', 'Ellie')('!!!'));

// function callIt(fn) {
//     var _args = Array.prototype.slice.apply(arguments)
//     _args.shift()
//     return fn.apply(null, _args)
// }
//
// var a = 1; var b = 2; var test = function (first, second) { return first === a && second === b;};
// console.log(callIt(test, a, b));

// function partialUsingArguments(fn) {
// 	var _args = Array.prototype.slice.apply(arguments)
//     _args.shift()
//     var result = function(...args) {
//         return fn.apply(null, _args.concat(args))
//     }
//     return result
// }
//
// var a = 1; var b = 2; var c = 3; var d = 4;var test = function (first, second, third, forth) {return first + second + third + forth;};
// console.log(partialUsingArguments(test, a, b)(c, d));

// function curryIt(fn) {
// 	return function(a) {
//         var _a = a
//     	return function(b) {
//             var _b = b
//             return function(c) {
//                 return fn(_a, _b, c)
//             }
//         }
//     }
// }
//
// var fn = function (a, b, c) {return a + b + c};
// console.log(curryIt(fn)(1)(2)(3));

// function createModule(str1, str2) {
// 	var obj = {
//         greeting: str1,
//         name: str2,
//         sayIt: function() {
//             return this.greeting + ',' + this.name
//         }
//     }
//
//     return obj
// }
//
// console.log(createModule('str1', 'str2'));

// function alterContext(fn, obj) {
// 	return fn.call(obj)
// }
//
// console.log(alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' }));

// function iterate(obj) {
//     var result = []
// 	for(i in obj) {
//         if(obj.hasOwnProperty(i)) {
//           result.push(i+': '+obj[i])
//         }
//     }
//     return result
// }
//
// var C = function() {this.foo = 'bar'; this.baz = 'bim';}; C.prototype.bop = 'bip';
// console.log(iterate(new C()));

// var reg = /\d{3}/
// var num = 'afweq3gas'
// console.log(reg.match(num));

var arr = [1,2,3,4,1,3,5,3,2,3,6]
// function removeSame(arr) {
//   var noSameArr = []
//   var theSameArr = []
//   arr.forEach(function(item) {
//     if(noSameArr.indexOf(item) === -1) {
//       noSameArr.push(item)
//     } else {
//       if(theSameArr.indexOf(item) === -1) {
//         theSameArr.push(item)
//       }
//     }
//   })
//
//   // 有问题，将引用变量arr重新赋值就脱离对原变量的引用了
//   // arr = noSameArr
//   arr.splice(0)
//   noSameArr.forEach(function(item) {
//     arr.push(item)
//   })
//   return theSameArr
// }

Array.prototype.removeSame = function() {
  var noSameArr = []
  var theSameArr = []
  // var arr = this
  arr.forEach(function(item) {
    if(noSameArr.indexOf(item) === -1) {
      noSameArr.push(item)
    } else {
      if(theSameArr.indexOf(item) === -1) {
        theSameArr.push(item)
      }
    }
  })

  // 有问题，将引用变量arr重新赋值就脱离对原变量的引用了
  // arr = noSameArr
  arr.splice(0)
  noSameArr.forEach(function(item) {
    arr.push(item)
  })
  return theSameArr
}
console.log(arr.removeSame());
console.log(arr);

// console.log(removeSame(arr));
// console.log(arr);

// console.log(Array.prototype.removeSame(arr));

// function mySort() {
//     var tags = new Array();//使用数组作为参数存储容器
//     var arr = Array.prototype.slice.call(arguments)
//     var compare = function(a, b) {
//       return a > b
//     }
//     tags = arr.sort(compare)
//     return tags;//返回已经排序的数组
// }
//
// var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
// console.info(result);//显示结果

// var username = document.getElementById('#username').val()
// var password = document.getElementById('#password').val()
//
// if(!username) {
//   alert('username is empty')
// } else if(!password) {
//   alert('password is empty')
// } else {
//   // submit or ajax validate
// }
