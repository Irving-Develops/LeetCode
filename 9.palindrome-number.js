/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let obj = {}

    let x = x.toString().split('')
    for(let i = 0; i < x.length-1; i++) {
        let current = x[i]
        obj[current] = i
    }
    let num = 0
    for(let i = x.length - 1; i > 0; i--) {
        let current = x[i]

        if(obj[current] !== num) return false

        num+=1
    }
    return true
};
// @lc code=end

console.log(isPalindrome(12321))