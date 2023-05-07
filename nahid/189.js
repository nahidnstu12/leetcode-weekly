/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 */
// var rotate = function (nums, k) {
//   const firstpart = nums.slice(0, nums.length - k);
//   const lastpart = nums.slice(nums.length - k, nums.length);
//   // console.log(lastpart, firstpart);
//   return [...lastpart, ...firstpart];
// };

// var rotate = function (nums, k) {
//   if (nums.length !== 1) {
//     if (nums.length >= k) {
//       const firstpart = nums.slice(0, nums.length - k);
//       for (let i = 0; i < k; i++) {
//         nums[i] = nums[nums.length - k + i];
//       }
//       for (let i = k, j = 0; i < nums.length; i++, j++) {
//         nums[i] = firstpart[j];
//       }
//     } else if (nums.length < k) {
//       let kk = k % nums.length ;
//       const firstpart = nums.slice(0, nums.length - kk);
//       for (let i = 0; i < kk; i++) {
//         nums[i] = nums[nums.length - kk + i];
//       }
//       for (let i = kk, j = 0; i < nums.length; i++, j++) {
//         nums[i] = firstpart[j];
//       }

//     } else {
//       nums.reverse();
//     }
//   }
//   console.log(nums);
// };

var rotate = function (nums, k) {
  let step = nums.length < k ? k % nums.length : k;
  if (nums.length !== 1) {
    const firstpart = nums.slice(0, nums.length - step);
    for (let i = 0; i < step; i++) {
      nums[i] = nums[nums.length - step + i];
    }
    for (let i = step, j = 0; i < nums.length; i++, j++) {
      nums[i] = firstpart[j];
    }
  }
  console.log(nums);
};

console.log(rotate([1, 2, 3], 5));
