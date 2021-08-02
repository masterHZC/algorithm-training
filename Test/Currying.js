function Currying(fn, argsNum){
  var args = []
  return function() {
    if (!args) args = []
    args = [...args, ...arguments]
    if (args.length >= argsNum) {
      var temp = [...args]
      args = null
      return fn.apply(null, [...temp])
    } else {
      return arguments.callee
    }
  }
}


function add(a, b, c, d, e){
  return a + b + c + d + e
}

var c = Currying(add, 5)
