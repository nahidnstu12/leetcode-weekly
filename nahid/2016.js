/**
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [1,5,2,10]
 * Output: 9
 * Explanation:
 * The maximum difference occurs with i = 0 and j = 3, nums[j] - nums[i] = 10 - 1 = 9.
 */

/**
 * The provided code is an implementation of the "maximumDifference" function, which takes an array of numbers as input and calculates the maximum difference between any two numbers in the array. Here's a breakdown of the algorithm:
 *
 * 1. Initialize variables:
 *    - `left`: Represents the left pointer starting from index 0.
 *    - `currDiff`: Stores the difference between the current element and the element at the left pointer.
 *    - `maxDiff`: Stores the maximum difference encountered so far, initialized as the difference between the second and first elements in the array.
 *
 * 2. Iterate through the array:
 *    - Starting from index 1, loop through the array elements.
 *    - Calculate the difference between the current element (`nums[i]`) and the element at the left pointer (`nums[left]`).
 *    - Update `maxDiff` with the maximum value between `currDiff` and `maxDiff`.
 *    - If the current element is less than the element at the left pointer, update the `left` pointer to the current index.
 *
 * 3. Return the result:
 *    - After the loop, check if `maxDiff` is greater than 0. If it is, return `maxDiff`, which represents the maximum difference between two numbers in the array.
 *    - If `maxDiff` is not greater than 0, return -1, indicating that there is no positive difference in the array.
 *
 * Example execution with the provided array `[87,68,91,86,58,63,43,98,6,40]`:
 * 1. Initialize `left = 0`, `currDiff`, and `maxDiff = 68 - 87 = -19`.
 * 2. Loop through the array:
 *    - At index 1: `currDiff = 68 - 87 = -19`, `maxDiff = -19` (maximum of `-19` and `-19`).
 *    - At index 2: `currDiff = 91 - 87 = 4`, `maxDiff = 4` (maximum of `4` and `-19`).
 *    - At index 3: `currDiff = 86 - 87 = -1`, `maxDiff = 4` (maximum of `4` and `-1`).
 *    - At index 4: `currDiff = 58 - 58 = 0`, `maxDiff = 4` (maximum of `4` and `0`).
 *    - At index 5: `currDiff = 63 - 58 = 5`, `maxDiff = 5` (maximum of `5` and `0`).
 *    - At index 6: `currDiff = 43 - 58 = -15`, `maxDiff = 5` (maximum of `5` and `-15`).
 *    - At index 7: `currDiff = 98 - 43 = 55`, `maxDiff = 55` (maximum of `55` and `-15`).
 *    - At index 8: `currDiff = 6 - 43 = -37`, `maxDiff = 55` (maximum of `55` and `-37`).
 *    - At index 9: `currDiff = 40 - 6 = 34`, `maxDiff = 55` (maximum of `55` and `34`).
 * 3. Return `maxDiff`, which is `55`.
 *
 * So, the maximum difference between any two numbers in the array `[87,68,91,86,58,63,43,98,6,40]` is `55`.
 */


// solved #1
// var maximumDifference = function(nums) {
//   let value;
//   nums = nums.reverse();
//
//   for(let i = 0; i < nums.length-1; i++) {
//     if (nums[i] > nums[i + 1]) {
//       for (let j = i; j < nums.length; j++) {
//         if (nums[j] < nums[i]) {
//           value = value > nums[i] - nums[j] ? value : nums[i] - nums[j];
//         }
//       }
//     }
//   }
//   return value || -1;
// };



var maximumDifference = function(nums) {
  let leftIndex = 0;
  let curdiff;
  let maxDiff = nums[1] - nums[0];
  for(let i = 1; i < nums.length; i++) {
    curdiff = nums[i] - nums[leftIndex];
    maxDiff = Math.max(curdiff, maxDiff);
    if(nums[i] < nums[leftIndex]){
      leftIndex = i;
    }
  }
  return maxDiff || -1;
};

console.log(maximumDifference([87,68,91,86,58,63,43,98,6,40]));
// console.log(maximumDifference([1,5,2,10]));