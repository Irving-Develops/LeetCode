/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var 
sortedSquares = function(nums) {
    let arr = [];
    let start = 0;
    let end = nums.length -1;
    
    while(start <= end){
        if(nums[start] **2 > nums[end] **2){
            arr.push(nums[start] **2);
            start++;
        } else {
            arr.push(nums[end] **2);
            end--;
        }
    }
    return arr.reverse();
};
// @lc code=end

