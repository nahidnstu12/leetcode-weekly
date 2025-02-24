/**
 * LeetCode #287 - Find the Duplicate Number
 * Category: ARRAY
 * Difficulty: TODO: Add difficulty (Easy/Medium/Hard)
 */

/*
Binary Search with Counting Approach:

Use the fact that numbers are from 1 to n
For any number mid in range [1,n]:

Count numbers in array ≤ mid
If count > mid, duplicate must be ≤ mid
If count ≤ mid, duplicate must be > mid


Narrow down the range until we find the duplicate
*/
function solution1(nums) {
    let left = 1;
    let right = nums.length-1
 
    
    while(left<right){
        let count = 0;
        let mid = Math.floor((right+left)/2)

        for(let num of nums){
            if(num <= mid) count++;
        }

        if(count>mid){
            right = mid;
            // console.log("right>", {left, count, right});
            
            
        }else if(count <= mid){
            left = mid + 1;
            // console.log("left>",{left, count, right});
        }
    }
   return left
    
    
}
function solution(nums) {
    
}
// Example Usage
// console.log(solution([7, 14, 3, 11, 8, 13, 4, 1, 6, 10, 15, 2, 5, 12, 9, 9])); 
console.log(solution([3,3,3,3,3])); 
