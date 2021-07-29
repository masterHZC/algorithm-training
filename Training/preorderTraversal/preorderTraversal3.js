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
var preorderTraversal = function(root) {
  var result = []
  var stack = []
  while(stack.length || root) {
    if (root) {
      result.push(root.val)
      if (root.right) {
        stack.push(root.right)
      }
      root = root.left
    } else {
      root = stack.pop()
    }
  }
  return result
}