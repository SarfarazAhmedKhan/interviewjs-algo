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
    // for (let k = 0; k < i; k++) {
    //   str += "*";
    // }
    // for (let l = 1; l < i; l++) {
    //   str += "*";
    // }
    console.log(str);
  }
}
function reverseStarJs(number) {
  for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = i; j > 0; j--) {
      str += " ";
    }
    for (let k = i; k < 5; k++) {
      str += "*";
    }
    for (let k = i; k < 5; k++) {
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
lookUp();

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

// console.log("sorting", Sorting());

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

function sortArray(arr, N)
{
 
    // Traverse the array
    for (var i = 0; i < N;) {
 
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
}
 
// Driver Code
var arr =  [ 2, 1, 5, 3, 4 ];
var N = arr.length;
 
// Function call to sort the array
sortArray(arr, N);
 
// Function call to print the array
printArray(arr, N);

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

function removeduplicateValues(array) {
  const result = [];
  for (var key in array) {
    let exists = false;
    for (var key1 in result) {
      if (array[key] == result[key1]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(array[key]);
    }
  }
  return result;
}

// console.log(
//   "removeDuplicateValues",
//   removeduplicateValues([1, 2, 3, 2, 4, 6, 7, 4, 5, 8, 8])
// );
function print2Smallest( arr, arr_size)
{
    let i, first, second;

    /* There should be atleast two elements */
    if (arr_size < 2)
    {
        document.write(" Invalid Input ");
        return;
    }

    first=Number.MAX_VALUE ;
    second=Number.MAX_VALUE ;
    for (i = 0; i < arr_size ; i ++)
    {
        /* If current element is smaller than first
        then update both first and second */
        if (arr[i] < first)
        {
            second = first;
            first = arr[i];
        }

        /* If arr[i] is in between first and second
        then update second */
        else if (arr[i] < second && arr[i] != first)
            second = arr[i];
    }
    if (second == Number.MAX_VALUE )
        document.write("There is no second smallest element\n");
    else
        document.write("The smallest element is " + first + " and second "+
            "Smallest element is " + second +'\n');
}


    // Driver program

    // let arr = [ 12, 13, 1, 10, 34, 1 ];
    // let n = arr.length;
    // print2Smallest(arr, n);
