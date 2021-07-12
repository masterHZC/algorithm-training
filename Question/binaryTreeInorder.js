// 二叉树中序遍历
var inorderTraversal = function(root) {
  let result = []
  helper(root, result)
  return result
};
function helper (root, result) {
  if (root !== null) {
    if (root.left !== null) {
      helper(root.left, result)
    }
    result.push(root.val)
    if (root.right !== null) {
      helper(root.right, result)
    }
  }
}
// def inorder (self, root)
// if root:
//  inorder(self.left)
//  self.travers_path.append(root.value)
//  inorder(self.right)
// O(n) 递归函数 T(n) = 2 * T(n/2) + 1
// 递归是系统帮忙 在内存中开辟栈
// 第二种方法是手动维护一个栈
// 这个是基于对于递归顺序的理解
// 中序遍历 左 - 中 - 右
// 先遍历到最左边的树 然后 从左边的树像上走 
var inorderTraversal = function(root) {
  let res = []
  let stack = []
  let curr = root
  while (curr !== null || stack.length !== 0) {
    while(curr !== null) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right
  }
  return res
}
// 莫里斯遍历 
// 线索二叉树
// 1. 将当前节点current初始化为根节点
// 2. while current 不能为空
// def current
//  if current.left == null
//   result.push(current.value)
//   current = current.right
//  else
//   current = current.lastRight
// 其实这个算法还是好理解的就是不好实现
// 这个算法本身是基于 中序遍历的特性
// 即中序遍历 最终节点的顺序是 左 中 右
// 所以 将整个 树以 这个逻辑拉成一条直线 这条线就是 result
// 果然 越是 简单直观的想法 实现起来越是复杂
// var inorderTraversal = function(root) { 
//   let res = []
//   let curr = root
//   let pre = null
//   while (curr !== null) {
//     // 实现递归的出口 和再 while 循环中寻找出口是类似的
//     if (!curr.left) {
//       res.push(curr.val)
//       curr = curr.right
//     } else {
//       pre = curr.left
//       while(pre.right) {
//         pre = pre.right
//       }
//       pre.right = curr
//       let temp = curr
//       curr = curr.left
//       temp.left = null
//     }
//   }
//   return res
// }
// var inorderTraversal = function(root) { 
//   if (!root) return root
//   let result = []
//   let curr = root
//   let pre = null
//   while (curr) {
//     if (!curr.left) {
//       result.push(curr.val)
//       curr = curr.right
//     } else {
//       pre = curr.left
//       while (pre.right && pre.right !== curr) {
//         pre = pre.right
//       }
//       if (!pre.right) {
//         pre.right = curr
//         curr = curr.left
//         continue
//       }
//       result.push(curr.value)
//       pre.right = null
//       curr = curr.right
//     }
//     return result
//   }
// }