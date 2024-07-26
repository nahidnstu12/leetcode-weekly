/*2089. Find Target Indices After Sorting Array

You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

 

Example 1:

Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
*/
const arr2 = [
  19, 20, 23, 23, 25, 26, 37, 37, 37, 37, 37, 37, 45, 47, 47, 47, 48, 55, 56,
  56, 57, 58, 58, 58, 59, 59, 63, 63, 64, 69, 69, 71, 72, 75, 77, 78, 79, 80,
];
var targetIndices1 = function (nums, target) {
  let sortArr = nums.sort((a, b) => a - b);
  console.log(sortArr);
  let resultArr = [];
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    console.log("mid>>", mid);
    if (sortArr[mid] === target) {
      resultArr.push(mid);
      // left side
      for (let i = mid - 1; i >= 0; i--) {
        console.log("left-i>>", i);
        if (sortArr[i] === target) {
          resultArr.push(i);
        } else break;
      }
      // right side
      for (let i = mid + 1; i < sortArr.length; i++) {
        console.log("right-i>>", i);
        if (sortArr[i] === target) {
          resultArr.push(i);
        } else break;
      }
      return resultArr.sort((a, b) => a - b);
    } else if (sortArr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return [];
};

var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  //   console.log(nums);
  let resultArr = [];
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    // console.log("mid>>", mid);
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  for (let i = start; i < nums.length; i++) {
    if (nums[i] === target) {
      resultArr.push(i);
    } else {
      break;
    }
  }
  console.log("index>>", start, mid, end);
  return resultArr || [];
};

// console.log(
//   targetIndices(
//     [
//       81, 7, 87, 77, 45, 70, 4, 20, 41, 8, 74, 88, 71, 28, 74, 41, 12, 16, 99,
//       13, 69, 34, 57, 74, 76, 88, 15, 1, 64, 10, 28, 89, 25, 12, 7, 69, 81, 39,
//       58, 79, 28, 27, 7, 87, 1, 66, 50, 93, 30, 76, 34, 22, 20, 89, 35, 42, 90,
//       22, 54, 50, 10, 20, 24, 44, 7,
//     ],
//     7
//   )
// );
console.log(targetIndices(arr2, 137));
