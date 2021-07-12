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
  var cur = root
  var pre = null
  while(cur) {
    if (!cur.left) {
      result.push(cur.val)
      cur = cur.right
    } else {
      pre = cur.left
      while(pre.right){
        pre = pre.right
      }
      pre.right = cur
      let temp = cur
      cur = cur.left
      temp.left = null
    }
  }
  return result
};