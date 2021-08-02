function rank(key, a) {
  var lo = 0
  var hi = a.length - 1
  while(lo <= hi) {
    var mid = lo + (hi - lo) / 2

    if (key < a[mid]) hi = mid - 1
    else if (key > a[mid]) lo = mid + 1
    else return mid
  }

  return -1
}