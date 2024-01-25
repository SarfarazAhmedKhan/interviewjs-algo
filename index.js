function fibonacciSeries(number) {
  let n1 = 0,
    n2 = 1,
    nextterm;
  for (let i = 0; i < number; i++) {
    console.log(n1);
    nextterm = n1;
    n1 = n2;
    n2 = nextterm + n2;
  }
}
// fibonacciSeries(6);

function isPrime(number) {
  let check = 2;
  while (number > check) {
    if (number % check == 0) {
      console.log("number is not prime");
      return false;
    } else {
      check++;
    }
  }
  console.log("number is prime");
}

// isPrime(27);

function starPatterJs(number) {
  for (let i = 0; i < number; i++) {
    var str = "";
    for (let j = number; j > i; j--) {
      str += " ";
    }
    for (let k = 0; k <= i * 2; k++) {
      str += "*";
    }
    console.log(str);
    // for (let k = 0; k < i; k++) {
    //   //   str += "*";
    //   // }
    //   // for (let l = 1; l < i; l++) {
    //   //   str += "*";
    //   // }
    //   console.log(str);
    // }
  }
}
function reverseStarJs(number) {
  for (let i = 3; i > 0; i--) {
    let str = "";
    for (let k = 0; k < i; k++) {
      str += " ";
    }
    for (let k = 5; k <= 2 * 2; k--) {
      str += "*";
    }
    console.log(str);
  }
}
// starPatterJs(5);
// reverseStarJs(5);

function missingNumber() {
  let arr = [2, 3, 4, 5, 6, 7, 8, 10];
  const findMissingNum = (arr) => {
    for (var i = 0; i < arr.length - 1; i++) {
      if (i == 0) {
        arr[i] != 1;
        return 1;
      }
      if (arr[i] + 1 != arr[i + 1]) {
        return arr[i] + 1;
      }
    }
    return false;
  };
  console.log("missing number", findMissingNum(arr));
}
// missingNumber();

function duplicateNumber() {
  let arr = [1, 2, 3, 3, 4, 9, 9, 5, 6, 7, 8, 9, 10];
  const duplicateNumber = (arr) => {
    let obj = {};
    let data = [];
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        // arr.splice(i, 1); //for removing duplicates
        return obj[arr[i]];
      } else {
        obj[arr[i]] = arr[i];
      }
    }
    console.log("data", arr);
  };
  console.log("duplicate number", duplicateNumber(arr));
}
// duplicateNumber();

function maxAndMin() {
  let arr = [1, 2, 9, 3, 3, 4, 9, 5, 6, 7, 8, 9, 10];
  const maxMin = (arr) => {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    console.log("data", max, min);
  };
  console.log("duplicate number", maxMin(arr));
}
// maxAndMin();

function cumulativeSum() {
  let arr = [1, 3, 5, 7];
  let result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i] + arr[i - 1]);
  }
  console.log("check result", result);
}
// cumulativeSum();

function lookUp() {
  let arr = [1, 5, 6, 1, 0, 1];
  const findSumPairs = (arr, value) => {
    let sumsLookup = {};
    let output = [];

    for (let i = 0; i < arr.length; i++) {
      let targetVal = value - arr[i];
      if (sumsLookup[targetVal]) {
        output.push([arr[i], targetVal]);
      }
      sumsLookup[arr[i]] = true;
    }
    return output;
  };
  console.log(findSumPairs(arr, 6));
}
// lookUp();

function Sorting() {
  let arr = [1, -1, 0, 8, -4, 2, 6, 10];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function SmartSorting() {
  // let arr = [1, -1, 0, 8, -4, 2, 6, 10, -2];
  let arr = [9, 9, -4, 1, -3, 2, 3, 2, 4, 6, 7, 4, 5, 8, 8];
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i = -1;
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("max min", max, min);
  return arr;
}

// console.log("sorting", SmartSorting());

function QuickSort() {
  let arr = [10, 5, 8, 12, 15, 6, 3, 9, 16, 27];
  let pivot = arr[0];
  let length = arr.length;
  let endPivot = arr[length - 1];
  let l1 = 0,
    l2 = arr.length - 1;
  while (l1 < l2) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > pivot) {
        n1 = arr[i];
        l1 = i;
        break;
      }
    }
    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j] < pivot) {
        n2 = arr[j];
        l2 = j;
        break;
      }
    }
    console.log("n1,n2", n1, n2);
    let index1 = arr.indexOf(n1);
    let index2 = arr.indexOf(n2);
    let temp = arr[index1];
    arr[index1] = n2;
    arr[index2] = temp;
    if (l1 > l2) {
      let temp = arr[l1];
      arr[l1] = arr[l2];
      arr[l2] = temp;
    }
  }
  let temp = arr[l2];
  arr[l2] = arr[0];
  arr[0] = temp;
  console.log(" arr", arr);
  return arr;
}

// console.log("quick sort", QuickSort());

function Sort() {
  let arr = [10, 5, 8, 12, 15, 6, 3, 9, 16, 27];
  let sorted = arr.sort((a, b) => {
    return a - b;
  });
  return sorted;
}
// console.log(Sort());

function sortArray(arr, N) {
  // Traverse the array
  for (var i = 0; i < N; ) {
    // If the current element is
    // at correct position
    if (arr[i] == i + 1) {
      i++;
    }

    // Else swap the current element
    // with it's correct position
    else {
      var temp1 = arr[i];
      var temp2 = arr[arr[i] - 1];
      arr[i] = temp2;
      arr[temp1 - 1] = temp1;
    }
  }
  console.log("arrrr", arr);
}

// // Driver Code
// var arr = [2, -1, 5, 3, 7];
// var N = arr.length;

// Function call to sort the array
// sortArray(arr, N);

// // Function call to print the array
// printArray(arr, N);

function palindrome(str) {
  let length = Math.floor(str.length / 2);
  console.log("length", length);
  for (var key in str) {
    if (str[key] != str[str.length - 1 - key]) {
      return "false";
    }
  }
  return true;
}

// console.log("palindrome", palindrome("civic"));

// function removeduplicateValues(array) {
//   const result = [];
//   for (var key in array) {
//     let exists = false;
//     for (var key1 in result) {
//       if (array[key] == result[key1]) {
//         exists = true;
//         break;
//       }
//     }
//     if (!exists) {
//       result.push(array[key]);
//     }
//   }
//   return result;
// }

// function removeduplicateValues(array) {
//   let element = [...new Set(array)];
//   console.log("eeee", element);
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//     if (obj[array[i]]) {
//     } else {
//       obj[array[i]] = array[i];
//     }
//   }
//   console.log("aaaaaa", Object.keys(obj));
// }

function removeduplicateValues(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = array[i];
    } else {
      console.log("aaa1", array, array[i]);
      array.splice(i, 1);
      console.log("aaa2", array, i);
      i -= 1;
    }
  }
  console.log("looked", array);
}

function removeduplicateValuesSmartly(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    // if (!obj[array[i]]) {
    //   obj[array[i]] = array[i];
    // } else {
    //   console.log("aaa1", array, array[i]);
    //   array.splice(i, 1);
    //   console.log("aaa2", array, i);
    //   i -= 1;
    // }
    if (!obj[array[i]]) {
      obj[array[i]] = array[i];
    }
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      i = -1;
    }
  }
  console.log("looked", array, "obj", Object.keys(obj));
}

// console.log(
//   "removeDuplicateValues",
//   removeduplicateValues([9, 9, -4, 1, -3, 2, 3, 2, 4, 6, 7, 4, 5, 8, 8])
// );

console.log(
  "removeDuplicateValues",
  removeduplicateValuesSmartly([9, 9, -4, 1, -3, 2, 3, 2, 4, 6, 7, 4, 5, 8, 8])
);

// function print2Smallest(arr, arr_size) {
//   let i, first, second;

//   first = arr[0];
//   second = arr[0];
//   for (i = 1; i < arr_size; i++) {
//     if (arr[i] < first) {
//       first = arr[i];
//     }
//     if (arr[i] > first && arr[i] < second) {
//       second = arr[i];
//     }
//   }
//   console.log(first, second);
// }

// // Driver program

// let arr = [12, 13, 1, 10, 34, 1];
// let n = arr.length;
// print2Smallest(arr, n);

function mergedTwoArraysAndSort(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  for (let k = 0; k < arr.length; k++) {
    if (!obj[arr[k]]) {
      obj[arr[k]] = arr[k];
    } else {
    }
  }
}
let arr1 = [1, 3, 4, 5, 5];
let arr2 = [2, 4, 4, 6, 8];
mergedTwoArraysAndSort(arr1, arr2);


//coditlit
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

function solution(N) {
  // console.log("Number", N)
  let array = []
  while (N >= 1) {
      array.push(Math.floor(N % 2))
      N = N / 2
  }
  array = array.reverse()
  let count = 0
  let max = 0
  let check = false
  // console.log("view value", array)
  for (let i = 0; i < array.length; i++) {
      // console.log("array[i]", array[i])

      //run first time 001
      if (array[i] == 1 && !check) {
          check = true
      }

      //start counting 00100
      if (array[i] == 0 && check) {
          count += 1
          // console.log("array[i] counter", array[i], count)
      }

      //max count 001001
      if (array[i] == 1 && check) {
          if (max < count) {
              max = count
              count = 0
          }
          // console.log("array[i] max counter", array[i], count, max)
      }
  }
  // console.log(max)
  // console.log("ssss,arr", array, max, count)
  return max
}
