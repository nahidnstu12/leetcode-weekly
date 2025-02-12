/**
 * LeetCode #238 - Product of Array Except Self
 * Category: ARRAY
 * Difficulty: TODO: Add difficulty (Easy/Medium/Hard)
 */


function solution2(nums) {
    let rightArr = [];
    let leftArr = [];
    let numsArr = []
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            leftArr.push(1);
            continue;
        }
        leftArr.push(leftArr[leftArr.length - 1] * nums[i - 1])
    }
    for (let i = nums.length - 1; i >= 0; i--) {

        if (i === nums.length - 1) {
            rightArr.unshift(1);
            continue;
        }
        rightArr.unshift(rightArr[0] * nums[i + 1])
    }

    for (let i = 0; i < nums.length; i++) {
        numsArr.push(leftArr[i] * rightArr[i])
    }
    return numsArr
}
function solution(nums) {
    let rightSum = 1;
    let leftSum = 1;
    let numsArr = []

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            numsArr.push(1)
        } else {
            leftSum *= nums[i-1]
            numsArr.push(leftSum)
        }

    }
    for (let i = nums.length-1; i >= 0; i--) {
        
        if (i === nums.length-1) {
           continue;
        } else {
            rightSum*= nums[i+1]
            numsArr[i]*=rightSum
        }

    }

    return numsArr
}

// Example Usage
console.log(solution([5, 2, 3, 4]));
// [24,12,8,6]