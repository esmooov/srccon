macro ? {
  rule infix { ($lefttest:expr, $righttest:expr) | ($leftval, $rightval) : $elseval } => { 
	(function(){
		if($lefttest){
			return $leftval;
		} else if ($righttest) {
			return $rightval;
		} else {
			return $elseval;
		}
	})();
  }
}

var a = 2;
var b = (a > 1 , a < 1) ? ("GT", "LT") : "EQ"
console.log(b)
