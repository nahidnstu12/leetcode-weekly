const nums = [1, 2, 1, 20, 15, 7, 9, 0];

function hasDuplicate(nums) {
  let flag = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] == nums[j]) {
        flag = 1;
        return true;
      }
    }
  }
  return false;
}

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let flag = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j <= nums.length; j++) {
        if (nums[i] == nums[j]) {
          flag = 1;
          return true;
        }
      }
    }
    return false;
  }
}


// [1, 2, 1, 20, 15, 7, 9, 0];
var containsDuplicate = function (nums) {
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    console.log(nums[i], nums[j]);

    if (nums[i] === nums[j]) {
      return true;
    }
  }
  return false;
};

const sol = new Solution();
console.log(containsDuplicate(nums));
