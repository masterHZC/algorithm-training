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
  var preder = null
  while(root) {
    // 去找最后一个节点然后 让最后一个节点和root链接
    if (root.left) {
      // preder是当前 root 的上一个节点
      preder = root.left
      // 如果preder 有右节点 preder会被更新 如果没有右节点 那么root的下一个left节点就是 root的上一个节点
      while(preder.right && preder.right !== root){
        preder = preder.right
      }
      // 找到 最右边的节点 然后和 root 节点连接
      if (!preder.right) {
        preder.right = root
        // 继续向下找
        root = root.left
      } else {
        // 找到了之前连接的节点
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
};

// 关键的节点是 如何回到 被绑定的根节点 然后和preder 解绑