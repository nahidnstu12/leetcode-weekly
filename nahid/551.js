/**
 * @param {string} s
 * @return {boolean}
 * Input: s = "PPALLL"
 * Output: false
 * Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
 */
// var checkRecord = function(s) {
//   let countForA = 0;
//   let contForLate = 0;
// for(let val of s) {
//
//   if(val === 'A'){
//     countForA++;
//   }
//
//   if(val !== 'A' && val !== 'P'){
//     countForLate++;
//   }else{
//     countForLate = 0;
//   }
//
//   if(countForA > 1 || countForLate > 2){
//     return false;
//   }
// }
// return true;
// };

var checkRecord = function(s) {
    let countForA = s.match(/A/g);
    if(countForA?.length > 1) return false;
    let contForLate = s.match(/LLL/g);
    if(contForLate?.length > 0) return false;
    return true;
};

console.log(checkRecord('PPALLPLLL'));