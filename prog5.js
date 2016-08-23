function isDivisible(n, min, max) {
	for (var i = min; i < max; i++) {
		if ((n % i) != 0) {
			return false;
		}
	}
	return true;
}

var num = 1
while (!isDivisible(num, 1, 20)) {
	num += 1;
}
console.log(num)