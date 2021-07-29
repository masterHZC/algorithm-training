/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // area = x * y
    // 解法 1
    // x max start -> find bigger y
    let j = height.length - 1
    let i = 0
    let max = 0
    let x = 0
    let y = 0
    while (j > i) {
        // 计算当前轮次的最大面积
        x = j - i
        y = Math.min(height[i], height[j])
        max = Math.max(max, x * y)
        // 如果 height[i] max 移动 j
        // 如果 height[j] max 移动 i
        if (height[i] > height[j]) {
            j--
        } else {
            i++
        }
    }
    return max
};
// @lc code=end

