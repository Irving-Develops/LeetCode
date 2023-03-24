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
  let i = 0;
  let j = 0;
  const n = nums.length;

  while (j < n) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }
  console.log(i)

  while (i < n) {
    nums[i] = 0;
    i++;
  }

};
console.log(moveZeroes([0,0,1,0,2,3,0,0,4]))
// @lc code=end

