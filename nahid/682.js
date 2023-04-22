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
var calPoints = function (operations) {
    let sum = [];
    let point = 0;
    let totalPoint = 0
    operations.forEach((item, index)=> {
        if(typeof +item && !isNaN(item)){

            // point = index == 0 ? +item : point + (+item);
             sum.push(+item)
            totalPoint += (+item);
            console.log("number", sum, totalPoint)
        }
        else if(item == "C"){
            // sum -=operations[index-1]
            totalPoint -= sum.pop();
            console.log("clear", sum, totalPoint)
        }
        else if(item == "D"){
            point = sum[sum.length - 1] * 2;
            sum.push(point)
            totalPoint += point;
            console.log("double", sum, totalPoint)
        }else if(item == "+"){
            point = sum[sum.length - 1] + sum[sum.length - 2]
            sum.push(point)
            totalPoint += point;
            console.log("add", sum, totalPoint)
        }


    })
    return totalPoint;
};

const ops = ["5","-2","4","C","D","9","+","+"]

console.log(calPoints(ops))
