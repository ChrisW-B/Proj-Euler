var sum = 0

function fib(x, y) {
	if (y < 4E6) {
		if (y % 2 == 0) {
			sum += y;
		}
		return fib(y, x + y)
	}
}

fib(1, 1)
console.log(sum);