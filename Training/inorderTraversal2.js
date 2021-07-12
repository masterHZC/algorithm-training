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
  var stack = []
  var result = []
  var node = root
  
  while(stack.length > 0 || node){
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      var target = stack.pop()
      result.push(target.val)

      if (target.right) {
        node = target.right
      }
    }
  }
  return result
};