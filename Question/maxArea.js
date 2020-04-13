// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 说明：你不能倾斜容器，且 n 的值至少为 2。

var maxArea = function(height) {
  let maxArea = 0, len = height.length
  // 暴力解法
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      maxArea = Math.max(maxArea, (j - i) * (Math.min(height[i], height[j])))
    }
  }
  // 双指针 
  // 左右夹逼 特点是什么
  // 一个长方形的面积 area = x * y
  let maxArea = 0, i = 0, j = height.length - 1
  while (i < j) {
    maxArea = Math.max(maxArea, (j - i) * Math.min(height[i], height[j]))
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return maxArea
}

// 再优化一下 就是如果下一个指针的高度 不如当前的指针高度 不去计算面积

//  [1,8,6,2,5,4,8,3,7]