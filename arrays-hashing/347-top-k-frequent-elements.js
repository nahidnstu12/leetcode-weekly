/**
 * LeetCode #347 - Top K Frequent Elements
 * Category: ARRAY
 * Difficulty: TODO: Add difficulty (Easy/Medium/Hard)
 */


function solution(nums, k) {
    const mapping =  nums.reduce((acc, cur) => {
        if(acc[cur]){
            acc[cur]++
        }else{
            acc[cur] = 1
        }
        return acc;
    }, {}) //{ '1': 3, '2': 2, '3': 4 }

    let values = Object.values(mapping).sort((a,b) => b -a ).slice(0, k) //[4, 3]

    

    return Object.entries(mapping)
}

// Example Usage
console.log(solution([1,1,1,2,2,3, 3, 3, 3], 2)); 
// Output: [1,2]
