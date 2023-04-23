/**
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 */
var majorityElement = function (nums) {
  const obj = nums.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  const max = Math.max(...Object.values(obj));
  for (const objKey in obj) {
    if (obj[objKey] === max) {
      return Number(objKey);
    }
  }
  // console.log(keys, vals, max);
};

console.log(majorityElement([3, 2, 3]));
