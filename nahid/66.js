/**
 * @param {number[]} digits
 * @return {number[]}
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 */


// var plusOne = function(digits) {
//   return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
// };


var plusOne1 = function(digits) {
  for(let i = digits.length-1; i >= 0; i--) {
    if(digits[i] === 9 || digits[i] === 10){
      digits[i] = 0;
      if(digits.length === 1){
        return [1, 0]
      }
      // first digit
      if(i-1 === 0){
        // console.log("i-1 === 0",digits.length,i,"digits",digits, digits.slice(i, digits.length));
        if(digits[i-1] === 9 && digits.length < 100){
          // console.log("digits.length < 3", digits.slice(i, digits.length));
          return [1, 0, ...digits.slice(i, digits.length)]
        }
        // console.log("digits[i-1]++", digits[i-1], digits, i);

          digits[i - 1]++;
          return digits;

      }else if(digits.length > 1){

        digits[i-1]++;
        // console.log("digits.length > 1", digits, i);
      }
    if(digits[i-1] !== 10){
      return digits;
    }

    }

    else if(digits[i] !== 10){
      digits[i]++;
      return digits;
    }
  }
  return digits;
};
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }

  // If we reach here, it means all digits were originally 9
  return [1, ...digits];
};
// var plusOne = function(digits) {
//   for(let i = digits.length-1; i >= 0; i--) {
//     if(digits[i] !== 9){
//       digits[i] += 1
//       return digits;
//     }
//     digits[i] = 0;
//     if(i === 0){
//       digits.unshift(1)
//       return digits;
//     }
//   }
// }


// console.log(plusOne([9,9]));
console.log(plusOne([0,0]));