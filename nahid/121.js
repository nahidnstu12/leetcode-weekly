/**
 * @param {number[]} prices
 * @return {number}
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */
// var maxProfit = function(prices) {
//
//
//     let minV = Math.min(...prices)
//     let minPos = prices.indexOf(minV)
//     let sellArr = prices.slice( minPos + 1, prices.length)
//     let maxV = Math.max(...sellArr)
//     let maxPos = prices.indexOf(maxV)
//     console.log( minV, minPos, maxV, maxPos, sellArr)
//     // 1 < 0
//     if(minPos < maxPos){
//         return maxV - minV
//     }
//     return 0
// };
var maxProfit = function (prices) {
  let minV,
    maxV = 0,
    minPos;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1] && i !== prices.length - 1) {
      minV = prices[i];
      minPos = i;
      break;
    }
  }
  if (minV && minPos !== prices.length - 1) {
    for (let i = minPos + 1; i < prices.length; i++) {
      if (prices.length === 2) {
        maxV = prices[i];
        // console.log("maxV single", prices[i]);
      }
      // [1,2,4]
      else if (prices[i] > prices[i + 1] && maxV < prices[i]) {
        maxV = prices[i];
        console.log("maxV res", prices[i]);
      } else if (
        prices[i] > prices[i - 1] &&
        prices[i] > maxV &&
        prices.length - 1 === i
      ) {
        maxV = prices[i];
        console.log("last", prices[i]);
      }
    }
  }
  console.log(minV, minPos, maxV);

  return maxV ? maxV - minV : 0;
};

console.log(maxProfit([3, 2, 6, 5, 0, 3]));
// console.log(maxProfit([2,1]))
// console.log(maxProfit([7,1,5,3,6,4]))
