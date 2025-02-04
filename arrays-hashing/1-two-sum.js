/**
 * LeetCode #1 - two sum
 * Category: ARRAY
 * Difficulty: TODO: Add difficulty (Easy/Medium/Hard)
 */


function solution2(nums, target) {
    let list = new Map();
    for (let i in nums) {
        if (list.has(target - nums[i])) {
            return [list.get(target - nums[i]), parseInt(i)]
        } else {
            list.set(nums[i], parseInt(i))
        }
    }
    return null;
}
function solution3(nums, target) {
    let list = {};
    function getKeyByValue(value) {
        return Object.keys(list).find(key => key == value)
    }

    for (let i in nums) {
       
        if (getKeyByValue(target - nums[i])) {
            return [parseInt(list[target - nums[i]]), parseInt(i)]
        } else {
            // list.set(nums[i], parseInt(i))
            list[nums[i]] = parseInt(i);
        }
    }
    return null;
}

function solution4(nums, target) {
    let list = {};
  
    for (const [i,j] of nums.entries()) {
       
        if (list.hasOwnProperty(target - j)) {
            return [list[target - j], i]
        } else {
            list[nums[i]] = i;
        }
    }
    return null;
}
function solution(nums, target) {
    let list = new Map();
    for (const [i,j] of nums.entries()) {
        if (list.has(target - j)) {
            return [list.get(target - j), i]
        } else {
            list.set(j, i)
        }
    }
    return null;
}

// Example Usage
console.log(solution([2, 7, 11, 15], 9)); 
