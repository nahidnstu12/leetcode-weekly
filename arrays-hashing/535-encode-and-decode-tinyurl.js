/**
 * LeetCode #535 - Encode and Decode TinyURL
 * Category: ARRAY
 * Difficulty: TODO: Add difficulty (Easy/Medium/Hard)
 */

let urlMap = new Map();
const base62str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var encode = function (longUrl) {
    
    let urlSum = 0;
    let key = 0;
    let primeNumber = 3
    let tinyurl = ""
    
    // making sum 
    for (let l of longUrl.slice(8)) {
        
        
        urlSum = (l.charCodeAt() + urlSum* primeNumber) % Math.pow(10, 12)
        // console.log(l.charCodeAt(), l, urlSum);
    }
    key = urlSum;
    // convert base62
    while (urlSum > 0) {

        tinyurl += base62str.charAt(urlSum % 62)

        urlSum = Math.floor(urlSum / 62);
    }
    urlMap.set(key, longUrl)
    console.log(urlMap);
    return tinyurl;
};

var decode = function (shortUrl) {
    let sum = 0;
    for(let i=0; i<shortUrl.length; i++){
        
        sum += base62str.indexOf(shortUrl[i]) * Math.pow(62, i)
        
    }
    return urlMap.has(sum) ? urlMap.get(sum) : ""
    
};

// Example Usage

const url = "https://bone.example.net/?brother=agreement&beds=bird"
// const url = "https://leetcode.com/problems/design-tinyurl"
console.log(decode(encode(url))); 
