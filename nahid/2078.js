/**
 * @param {number[]} nums
 * @return {number}
 * Input: colors = [1,8,3,8,3]
 * Output: 4
 * Explanation: In the above image, color 1 is blue, color 8 is yellow, and color 3 is green.
 * The furthest two houses with different colors are house 0 and house 4.
 * House 0 has color 1, and house 4 has color 3. The distance between them is abs(0 - 4) = 4.
 */

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

var maxDistance = function(colors) {

};

console.log(maxDistance([1,1,1,6,1,1,1]));
// console.log(maximumDifference([87,68,91,86,58,63,43,98,6,40]));
// console.log(maximumDifference([1,5,2,10]));