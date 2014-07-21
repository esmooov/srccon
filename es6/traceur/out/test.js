function destruct() {
  var $__2 = [1, 2, 3],
      a = $__2[0],
      b = $__2[1],
      c = $__2[2];
  console.log("A: ", a);
  console.log("B: ", b);
  console.log("C: ", c);
}
function iterate() {
  for (var $__0 = [1, 2, 3][$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    var element = $__1.value;
    {
      console.log("I gotta", element);
    }
  }
}
function customIterator() {
  var myiterator = $traceurRuntime.initGeneratorFunction(function $__3(mult) {
    var hopper,
        i;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            hopper = [1, 2, 3], i = 0;
            $ctx.state = 9;
            break;
          case 9:
            $ctx.state = (i < 3) ? 1 : -2;
            break;
          case 1:
            $ctx.state = 2;
            return (mult * hopper[$traceurRuntime.toProperty(i)]);
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            i++;
            $ctx.state = 9;
            break;
          default:
            return $ctx.end();
        }
    }, $__3, this);
  });
  var doubler = myiterator(2);
  for (var $__0 = doubler[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    var element = $__1.value;
    {
      console.log("My doubler gave me", element);
    }
  }
}
