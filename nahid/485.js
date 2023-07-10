/**
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
 */
// var findMaxConsecutiveOnes = function(nums) {
//   let maxDiff = 0;
//   let curr = 0;
//   for (let i = 0; i < nums.length; i++){
//     if( nums[i] !== 0){
//       curr++;
//       console.log("nums[i] !== 0", nums[i], curr);
//     }else{
//       maxDiff = maxDiff > curr ? maxDiff : curr;
//       console.log("else--", maxDiff, curr);
//       curr = 0;
//     }
//   }
//   if(maxDiff < curr){
//     return curr;
//   }
//   return maxDiff;
// };

var findMaxConsecutiveOnes = function(nums) {
  let maxDiff = 0;
  let curr = 0;
  for (let val of nums){
    if( val !== 0){
      curr++;
    }else{
      maxDiff = maxDiff > curr ? maxDiff : curr;
      curr = 0;
    }
  }
  if(maxDiff < curr){
    return curr;
  }
  return maxDiff;
};

console.log(findMaxConsecutiveOnes([]));