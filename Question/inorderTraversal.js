/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = []
  const stack = []
  let cur = root
  while(stack.length || cur) {
    if (cur) {
      // 到达第一个输出的叶子位置
      stack.push(cur)
      cur = cur.left
    } else {
      // 输出
      const node = stack.pop()
      result.push(node.val)
      node.right && (cur = node.right)
    }
  }
  return result
};