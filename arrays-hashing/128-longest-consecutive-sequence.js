/**
 * LeetCode #128 - Longest Consecutive Sequence
 * Category: ARRAY
 * Difficulty: TODO: Add difficulty (Easy/Medium/Hard)
 */


function solution(nums) {
    // nums = new Set(nums)
    if(nums.length<=1) return nums.length
    nums = nums.sort((a,b) => a - b);
    let cur=1, longest= 0;

    for(let i=1;i < nums.length; i++){
        if(nums[i] === nums[i-1] ){
            continue
        }
        if(nums[i] - nums[i-1] === 1){
            cur+=1;
            console.log("count>",nums[i], cur);
        }else{
            if(cur> longest) longest = cur;
            cur = 1
        }
        
    }
    if(cur> longest) longest = cur;
    console.log(nums);
    
    return longest;
}

// Example Usage
// console.log(solution([0,1,3,2, 5,6,7,8,9,10])); 
console.log(solution([9,1,4,7,3,-1,0,5,8,-1,6])); 
