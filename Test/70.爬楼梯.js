/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//     // f(x) = f(x-1) + f(x-2)
//     // 1. 递归
//     // 递归出口 n = 1, n = 0, n < 0 超时
//     let result = 0
//     result = calculationN(n)
//     return result
// };
// function calculationN(n) {
//     if (n === 1 || n === 0) return 1
//     if (n < 0) return 0
//     result = calculationN(n - 1) + calculationN(n - 2)
//     return result
// }

// var climbStairs = function (n) {
//     // f(x) = f(x-1) + f(x-2)
//     // 2. 动态规划 滚动数组
//     // 要算出 f(x) 需要知道两个值 f(x-1) f(x-2) 定义三个变量表示这三个值
//     if (n < 2) return 1
//     // let arr = [0, 1, 1]
//     // for (let i = 0; i < n - 1; i++) {
//     //     arr.shift()
//     //     let q = arr[0]
//     //     let p = arr[1]
//     //     arr.push(q + p)
//     // }
//     // return arr.pop()
//     let q = 0
//     let p = 1
//     let r = 1
//     for (let i = 0; i < n - 1; i++) {
//         q = p
//         p = r
//         r = q + p
//     }
//     return r
// };

var climbStairs = function (n) {
    // f(x) = f(x-1) + f(x-2)
    // 4. 斐波那契公式
    // 记这个算法主要是为了 记住斐波那契的公司
    const sqrt_5 = Math.sqrt(5)
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1)
    return Math.round(fib_n / sqrt_5)
};
// @lc code=end

