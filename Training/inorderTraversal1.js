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
  inorder_traverse(result, root)
  return result
};

function inorder_traverse(res, root){
  if (!root) return
  inorder_traverse(res, root.left)
  res.push(root.val)
  inorder_traverse(res, root.right)
}
 // 上一次写这道题已经可以使用循环的来模拟中序遍历了