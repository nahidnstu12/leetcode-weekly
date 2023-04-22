/**
 * @param {string[]} operations
 * @return {number}
 *
 */
/**
 * Input: ops = ["5","2","C","D","+"]
    Output: 30
    Explanation:
    "5" - Add 5 to the record, record is now [5].
    "2" - Add 2 to the record, record is now [5, 2].
    "C" - Invalidate and remove the previous score, record is now [5].
    "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
    "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
    The total sum is 5 + 10 + 15 = 30.
 */
    let sum = [];
// var calPoints = function (operations) {
//     let point = 0;
//     // let totalPoint = 0
//     operations.forEach((item, index)=> {
//         if(typeof +item && !isNaN(item)){
//
//              sum.push(+item)
//
//         }
//         else if(item == "C"){
//             sum.pop();
//         }
//         else if(item == "D"){
//             point = sum[sum.length - 1] * 2;
//             sum.push(point)
//         }else if(item == "+"){
//             point = sum[sum.length - 1] + sum[sum.length - 2]
//             sum.push(point)
//         }
//
//
//     })
//     return sum.reduce((acc, cur)=> acc+cur, 0);
// };
var calPoints = function (operations) {

    const sum = operations.reduce((acc, item)=> {
        if(typeof +item && !isNaN(item)){
            acc.push(+item)
        }
        else if(item == "C"){
            acc.pop()
        }
        else if(item == "D"){
            acc.push(acc[acc.length - 1]*2 )
        }
        else if(item == "+"){
            acc.push(acc[acc.length - 1] + acc[acc.length - 2] )
        }
        return acc;

    }, [])

    return sum.reduce((acc, cur)=> acc+cur, 0);
};

const ops = ["5","-2","4","C","D","9","+","+"]

console.log(calPoints(ops))
