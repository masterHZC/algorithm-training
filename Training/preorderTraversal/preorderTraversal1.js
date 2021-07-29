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
  preorder(result, root)
  return result
}

function preorder(res, root) {
  if (!root) return
  res.push(root.val)
  preorder(res, root.left)
  preorder(res, root.right)
}