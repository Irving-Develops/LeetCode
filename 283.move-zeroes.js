/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0
    let j = nums[nums.length - 1]
    let placeHolder = 0

    while(i < nums.length) {
        if(nums[i] !== 0) {
            i += 1
        } else if(nums[j] === 0  ) {
            j -= 1
        }
        placeHolder = nums[i]
        nums[i] = nums[j]
        nums[j] = placeHolder
    }
    return nums
    
};
// @lc code=end

