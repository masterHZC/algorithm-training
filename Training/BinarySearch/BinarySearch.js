function BinarySearch(val, list) {
  var sortList = list.sort()
  var lo = 0
  var hi = sortList.length - 1
  while(lo <= hi) {
    var mid = lo + Math.round((hi - lo) / 2)
    if (val > sortList[mid]) lo = mid + 1
    else if (val < sortList[mid]) hi = mid - 1
    else return mid
  }
  return -1
}