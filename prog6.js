function sumSquares(min, max) {
	var sum = 0;
	for (var i = min; i <= max; i++) {
		sum += i * i;
	}
	return sum;
}

function squareSums(min, max) {
	var sum = 0;
	for (var i = min; i <= max; i++) {
		sum += i;
	}
	return sum * sum;
}

function difSums(min, max) {
	return sumSquares(min, max) - squareSums(min, max);
}

console.log(difSums(1, 100));