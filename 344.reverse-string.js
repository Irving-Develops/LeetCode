/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i =0, j = s.length -1; i < j; i++) {
        [s[i], s[j]] = [s[j], s[i]]
        j--
    }
    return s
};
// @lc code=end

