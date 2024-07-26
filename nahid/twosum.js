/**
 * 2099. Find Subsequence of Length K With the Largest Sum
 * Input: nums = [2,1,3,3], k = 2 [63,-74,61,-17,-55,-59,-10,2,-60,-65]
 * Output: [3,3] [63,61,-17,-55,-59,-10,2,-60,-65] [-65,-60,-59,-55,-17,-10,2,61,63]
 * Explanation:
 * The subsequence has the largest sum of 3 + 3 = 6.
 */
var maxSubsequence = function (nums, k) {

  return nums.length > k ? nums.sort((a, b) => b - a).slice(nums.length - k): nums;
};

console.log({ maxSubsequence: maxSubsequence([63,-74,61,-17,-55,-59,-10,2,-60,-65], 9) });
