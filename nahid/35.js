/*35. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
*/
var searchInsert1 = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    console.log("mid>>", mid, nums[mid], target);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log("index>>", { start, end });
  if (mid == 0 && nums[0] < target) return 1;
  else if (mid === 0 || (nums.length - 1 === mid && nums[mid] > target)) {
    return mid;
  } else if ((nums.length - 1 === mid || mid === 1) && nums[mid] < target) {
    return mid + 1;
  }
  if (mid == 1 && nums[1] > target) return 1;

  if (nums[mid] > target) {
    return mid;
  } else {
    return mid - 1;
  }
};
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
};
// console.log(searchInsert([11, 22, 33, 44, 55, 66, 77, 88, 99], 82));
console.log(searchInsert([3, 5, 7, 9, 10], 8));
