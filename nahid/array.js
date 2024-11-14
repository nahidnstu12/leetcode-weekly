const arr1 = [1, 2, 2, 4, 5];
const arr2 = [
  [1, 2],
  [2, 3],
  [3, 4],
];

// array travers using recursion
function traverseRecursive(arr, index = 0) {
  if (arr.length <= index) {
    return;
  }
  console.log(arr[index]);
  traverseRecursive(arr, index + 1);
}

// reverse array travers using recursion
function reversetraverseRecursive(arr, index = arr.length) {
  if (0 >= index) {
    return;
  }
  console.log(arr[index - 1]);
  reversetraverseRecursive(arr, index - 1);
}

// traverseRecursive(arr1);
// reversetraverseRecursive(arr1);

// 2d sum
function print2dPrint(arr) {
  for (const items of arr) {
    for (const element of items) {
      console.log(element);
    }
  }
}

// print2dPrint(arr2);

// kadane algorithm ()
function maxSubarraySum(arr) {
  let maxSum = arr[0];
  let maxCur = arr[0];
  for (let i = 0; i < arr.length; i++) {
    maxCur = Math.max(arr[i], arr[i] + maxCur);
    maxSum = Math.max(maxCur, maxSum);
  }
  return maxSum;
}

// console.log(maxSubarraySum([2, 3, -8, 7, -1, 2, 3]));

function maxSubarraySumAndPrintSubArray(arr) {
  let maxSum = arr[0];
  let maxCur = arr[0];
  let start = 0,
    end = 0,
    tempStart = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i] + maxCur) {
      maxCur = arr[i];
      tempStart = i;
    } else {
      maxCur = arr[i] + maxCur;
    }
    if (maxCur > maxSum) {
      maxSum = maxCur;
      start = tempStart;
      end = i + 1;
    }
    // maxCur = Math.max(arr[i], arr[i] + maxCur);
    // maxSum = Math.max(maxCur, maxSum);
  }
  return { maxSum, subArr: arr.slice(start, end) };
}

// console.log(maxSubarraySumAndPrintSubArray([2, 3, -8, 7, -1, 2, 3]));

// Given an array of size n and an integer k, find all elements in the array that appear more than n/k times.
function findElements(arr, k) {
  const thresold = Math.floor(arr.length / k);
  let frequencyMap = {};
  let result = [];
  for (let i of arr) {
    frequencyMap[i] = (frequencyMap[i] || 0) + 1;
  }
  for (let i in frequencyMap) {
    if (frequencyMap[i] > thresold) {
      result.push(+i);
    }
  }
  return result;
}

// console.log(findElements([3, 1, 2, 2, 1, 2, 3, 3], 4));

// Merge Overlapping Intervals

function mergeIntervalNaive(arr) {
  // 1. Sort
  arr.sort((a, b) => a[0] - b[0]);
  console.log("arr", arr);

  //   2. Initialized
  const merged = [];
  let currentInterval = arr[0]; // [7, 8]

  for (let i = 1; i < arr.length; i++) {
    // currentInterval = // [7, 8]
    let nextInterval = arr[i]; //[7, 8]

    // 3. check current interval 2nd index is greater than next interval first index ([1,4], [2,5] => 4 > 2)
    if (currentInterval[1] > nextInterval[0]) {
      //6>7
      console.log("..", currentInterval, nextInterval);
      // update current interval 2nd index
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]); // 6
    } else {
      console.log(">>", currentInterval, nextInterval);

      // 4.
      merged.push(currentInterval);
      currentInterval = nextInterval;
    }
  }
  //   5.
  merged.push(currentInterval);
  return merged;
}

function mergeIntervalInPlace(arr) {
  // 1. Sort
  arr.sort((a, b) => a[0] - b[0]);

  //   2. Initialized
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    // 3. check current interval 2nd index is greater than next interval first index
    if (arr[index][1] > arr[i][0]) {
      // update current interval 2nd index
      arr[index][1] = Math.max(arr[index][1], arr[i][1]); // 6
    } else {
      // 4.
      //   merged.push(currentInterval);
      index++;
      arr[index] = arr[i];
    }
  }
  //   5.
  return arr.slice(0, index + 1).flat();
}

// console.log(
//   mergeIntervalInPlace([
//     [7, 8],
//     [2, 5],
//     [1, 4],
//     [4, 6],
//   ])
// );

// Rotate Square Matrix by 90 Degrees Counterclockwise
function rotateMatrix(arr) {
  const length = arr.length;
  let temp = Array.from({ length }, () => Array(length).fill(0));
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      temp[length - j - 1][i] = arr[i][j];
    }
  }
  return temp;
}

function rotateTransposeMatrix(arr) {
  const length = arr.length;
  //  1.reverse row
  for (let i = 0; i < Math.floor(length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[length - i - 1];
    arr[length - i - 1] = temp;
  }

  console.log("reverse arr>>", arr);

  // 2. transpose column
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      // let temp = arr[i][j];
      // arr[i][j] = arr[j][i];
      // arr[j][i] = temp

      //   let temp = arr[j][i];
      //   arr[j][i] = arr[i][j];
      //   arr[i][j] = temp;

      [arr[j][i], arr[i][j]] = [arr[i][j], arr[j][i]];
    }
  }

  return arr;
}

// console.log(
//   rotateTransposeMatrix([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//     // [17, 18, 19, 20],
//   ])
// );

// console.log(
//   rotateTransposeMatrix([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//   ])
// );

// // Function to find the product of max product subarray
function maxProduct(arr) {
  if (arr.length === 0) return;

  let curMax = arr[0];
  let curMin = arr[0];
  let maxProd = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let tempMax = Math.max(temp, curMax * temp, curMin * temp);
    curMin = Math.min(temp, curMax * temp, curMin * temp);
    curMax = tempMax;
    // console.log(curMax, curMin, maxProd);

    maxProd = Math.max(maxProd, curMax);
  }
  return maxProd;
}

// console.log(maxProduct([2, -3, 4, -5]));
// console.log(maxProduct([-2, 6, -3, -10, 0, 2]));

function findLongestConsecutiveSubsequence(arr) {
  const setArr = new Set(arr);
  let maxLength = 0;

  for (let i of arr) {
    if (!setArr.has(i - 1)) {
        
      let curNum = i;
      let length = 1;

      while (setArr.has(curNum + 1)) {
        length++;
        curNum++;
      }
      maxLength = Math.max(maxLength, length);
    }
    
  }
  return maxLength;
}


console.log(findLongestConsecutiveSubsequence([36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]));