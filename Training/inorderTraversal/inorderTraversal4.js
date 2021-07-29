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
  var result = []
  var white = 0, gray = 1
  var stack = [{ color: white, node: root }]
  while(stack.length) {
    var {color, node} = stack.pop()
    if (!node) continue
    if (color === white) {
      stack.push({color: white, node: node.right})
      stack.push({color: gray, node})
      stack.push({color: white, node: node.left})
    } else {
      result.push(node.val)
    }
  }
  return result
};