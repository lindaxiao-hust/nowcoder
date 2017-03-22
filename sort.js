//bubble sort
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[i]) {
        var tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
      }
    }
  }
  console.log(arr);
}

// bubbleSort([1, 2, 4, 3, 5, 3, 4, 8, 6])

//quicksort
function quicksort(arr) {
  //结束条件，数组只剩一个元素
  if(arr.length <= 1) {
    return arr
  }

  var left = []
  var right = []
  var mid = arr[0]//随机取数组第一个值

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quicksort(left).concat(mid, quicksort(right))
}

console.log(quicksort([1, 2, 4, 3, 5, 3, 4, 8, 6]));
