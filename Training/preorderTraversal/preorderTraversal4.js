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
// var preorderTraversal = function(root) {
//   var result = []
//   var stack = []

// }

// morris
function inorderTrabersal(root) {
  var result = []
  var preder = null
  while(root) {
    if (root.left) {
      preder = root.left

      while(preder && preder.right !== root) {
        preder = preder.right
      }

      if (!preder.right) {
        preder.right = root
        root = root.left
      } else {
        result.push(root.val)
        preder.right = null
        root = root.right
      }

    } else {
      result.push(root.val)
      root = root.right
    }
  }
  return result
}