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
    for (let i = nums.length-1; i >= 0; i--) {
        
        if (i === nums.length-1) { 
            rightArr.unshift(1); 
            continue; 
        }
        rightArr.unshift(rightArr[0] * nums[i+1])
    }

    for (let i = 0; i < nums.length; i++) {
        numsArr.push(leftArr[i] * rightArr[i])
    }
    return numsArr
}
function solution(nums) {
    let rightArr = 1;
    let leftArr = 1;
    let numsArr = []
   
    for (let i = 0, j=nums.length-1; i < nums.length; i++, j--) {
        if(i>0)leftArr*= nums[i-1];
        if(j>=0) rightArr*= nums[j++]

        if (i === nums.length-1) { 
            numsArr.push(1 * leftArr); 
            continue; 
        }
        if(i === 0){
            numsArr.push(1 * rightArr); 
            continue; 
        }
        
        console.log({i,  leftArr, j,rightArr});
        numsArr.push(leftArr)
        
    }
    
    return numsArr
}

// Example Usage
console.log(solution([5,2,3,4]));
// [24,12,8,6]