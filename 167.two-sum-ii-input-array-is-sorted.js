/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 1
    let j = 2
    let obj = {}
    let arr = []

    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i]
        let complement = target - num
        obj[complement] = i + 1
    }

    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i]

        if(obj[num]){
            arr.push(i+1, obj[num])
            return arr
        }
    }
    
};
// @lc code=end

