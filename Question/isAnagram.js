// leetcode 242 有效的字母异位词
// 分析题目：
// 字母异位词本道题目中是包含了相同的两个字母，也就是说两个相同的字母也算做了异位词。主要是考察两个字符的元素组成是否相同
// 题解 1. 排序
var isAnagram = function(s, t) {
  // 把排序放在第一个是因为 这类题目排序是一个很重要的思路 之后会有一个将 异位字母分类的题目中一个主要解法就是通过排序完成的
  if (s.length !== t.length) return false
  let sSorted = s.split('').sort().join('') 
  let tSorted = t.split('').sort().join('') 
  if (sSorted !== tSorted) return false
  return true
  // 128 ms 30.78% 38.1 MB 50.09%
  // 132 ms 25.77% 38.2 MB 45.48%
  // 因为 排序是 O(nlogn) 所以结果比较慢
}
// 题解 2. hash table
var isAnagram = function(s, t) { 
  // 像这种不太复杂的题目 使用hash table 基本都是 O（n）的时间复杂度
  if (s.length !== t.length) return false
  let len = s.length
  let hashMap = new Map
  for (let i = 0; i < len; i++) {
    // 将字符中不同字母 分类 统计每一类型 的数量
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], hashMap.get(s[i]) + 1)
    } else {
      hashMap.set(s[i], 1)
    }
  }
  for (let j = 0; j < len; j++) {
    // 如果 两个字母的 类型相同 每个类型的字母数量也相同 那么这两个字母就是异位字母
    if (!hashMap.has(t[j]) || hashMap.get(t[j]) === 0) return false
    hashMap.set(t[j], hashMap.get(t[j]) - 1)
  }
  return true
  //  76 ms, faster than 59.73%
  //  100 ms 51.82%
  // 这个已经O(n)的复杂度了 但是结果也是没有及格 然后 推荐题解
}
// 3. 推荐题解
// 这个思路 主要在一 用一个 26 位的数组模拟 hashmap 也是 O(n) 的复杂度但是真的很快
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let len = s.length
  let hashArray = new Array(26).fill(0)
  let baseCount = 'a'.charCodeAt()
  for (let i = 0; i < len; i++) hashArray[s.charCodeAt(i) - baseCount]++
  for (let j = 0; j < len; j++) hashArray[t.charCodeAt(j) - baseCount]--
  for (let key in hashArray) if (hashArray[key] !== 0) return false
  return true
  // 60 ms 99.73%
  // 64 ms, faster than 91.72%
}