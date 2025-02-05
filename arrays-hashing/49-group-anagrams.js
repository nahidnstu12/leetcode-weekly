/**
 * LeetCode #49 - Group Anagrams
 * Category: ARRAY
 * Difficulty: TODO: Add difficulty (Easy/Medium/Hard)
 */


function solution2(strs) {
    const sortedArr = strs.map(str => Array.from(str).sort().join(','))

    const groupArr = sortedArr.reduce((acc, cur, curIndex) => {

        if (acc[cur]) {
            acc[cur] = [...acc[cur], strs[curIndex]]
        } else {
            acc[cur] = [strs[curIndex]]
        }
        return acc;
    }, {})

    return Object.values(groupArr)

}
function solution(strs) {

    const sortedArr = strs.map(str => Array.from(str).sort().join(','))

    const map = new Map()

    sortedArr.forEach((val, i) => {
        if(map.has(val)){
            map.set(val, [...map.get(val),strs[i]])
        }else{
            map.set(val, [strs[i]])
        }
    })

    return [...map.values()]

}

// Example Usage
console.log(solution(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(solution([""]));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
