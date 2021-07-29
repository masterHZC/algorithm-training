/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // 解法 1
    // let j = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== 0) {
    //         nums[j] = nums[i]
    //         if (j++ !== i) nums[i] = 0
    //     }
    // }

    // 解法 2
    // let k = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== 0) {
    //         nums[k++] = nums[i]
    //     }
    // }

    // while (k < nums.length) {
    //     nums[k++] = 0;
    // }

    // 解法 3
    // let j = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] !== 0) {
    //         let temp = nums[i]
    //         nums[i] = 0
    //         nums[j++] = temp
    //     }
    // }
};
// @lc code=end

