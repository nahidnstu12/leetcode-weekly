/**
 * LeetCode #242 - Valid Anagram
 * Category: ARRAY
 * Difficulty: TODO: Add difficulty (Easy/Medium/Hard)
 */


function solution(s, t) {
    if (s.length !== t.length) return false;

    const letters = 'abcdefghijklmnopqrstuvwxyz'

    const list = {}

    for (let l of letters) {
        list[l] = 0
    }


    for (let i of s) list[i]++


    for (let i of t) list[i]--

    for (let i in list) {
        if (list[i] != 0)
            return false
    }

    return true
}

function solution2(s, t) {
    if (s.length !== t.length) return false;

    const letters = 'abcdefghijklmnopqrstuvwxyz'

    const list = new Map()

    for (let l of letters) {
        list.set(l, 0)
    }


    for (let i of s) {
        if (list.has(i)) list.set(i, list.get(i) + 1)
    }


    for (let i of t) if (list.has(i)) list.set(i, list.get(i) - 1)
  
    for (let [i, v] of list) {

        if (v != 0) {
            return false
        }
    }

    return true
}

// Example Usage
console.log(solution2("anagram", "nagaram"));
console.log(solution2("rat", "car")); 
