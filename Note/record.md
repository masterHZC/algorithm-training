### hash table

根据关键码值而直接进行访问的数据结构。它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫作散列函数，存放记录的数组叫作哈希表
```
 简单的 hash 函数 就是将当前的字符转成ASCII码 然后加在一起 最后mod一个数
```
如果出现 hash 碰撞怎么办？
可以在一个位置储存多个数值，可以拉出一个链表
### Map Set
 + Map: key-value，key不重复

 + Set：不重复元素的集合
   
   set.add(value)
   set.delete(value)
   set.hash(value)
### 实战和作业
  https://leetcode-cn.com/problems/valid-anagram/description/
  https://leetcode-cn.com/problems/group-anagrams/
  https://leetcode-cn.com/problems/two-sum/description/
### 二叉搜索树
链表 -> 树 ： 用空间换时间
经典的案例就是斐波那契数 509 题
```js
// 定义一个树结构
class TreeNode {
  constructor (val) {
    this.val = val
    this.left = this.right = null
  }
}
```
如果一个树状结构毫无特点，遍历一个树的结构就需要遍历树的每一个节点，就是左，中，右序三种遍历方式
首先要查自己的根节点的值，其次还要遍历它的左节点和右节点，一共是三句语言，而这三句语言的不同顺序就是不同的三种遍历方式
>  前序 Pre-order：根-左-右  中序 In-order：左-根-右  后序 Post-order：左-右-根
```js
  // 伪代码 树的遍历 基本上都是递归
  // 循环可以尝试广度优先 但是很麻烦
  def preorder(self, root):
   if root:
    self.traverse_path.append(root.val)
    self.preorder(root.left)
    self.preorder(root.right)
  // 中序
  def inorder(self, root):
   if root:
    self.inorder(root.left)
    self.traverse_path.append(root.val)
    self.inorder(root.right)
  // 后序
  def postorder(self, root):
    if root:
      self.postorder(root.left)
      self.postorder(root.right)
      self.traverse_path.append(root.val)
```
### 二叉搜索树
如果是一个普通的树 我们想找查找节点就要把 树的所有节点全部遍历一遍 这样的时间复杂度就是 O（n） 根链表没有区别。
> 二叉搜索树，也称有序二叉树或排序二叉树，是指一棵空树或者具有一下性指的树：
> 1.左子树上的所有节点值均小于它的根节点值 2.右子树上所有节点值均大于它的根节点值 3.以此类推：左，右子树也分别为二叉查找树 （重复性!）
中序遍历：升序遍历
#### 二叉搜索树常见操作
1. 查询 O(logn) O(n)
2. 插入（创建）O(logn) O(n)
3. 删除 O(logn) O(n)
> Demo：https://visualgo.net/zh/bst
如果一个二叉搜索树 只有一个方向的节点 最终就会变成链表 那么查找顺序就是 O(n) 的时间复杂度
### 实战/练习题
  https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
  https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
  https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
  https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
  https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/