function getPrimeFactors(num) {
	var factors = []
	d = 2
	while (num > 1) {
		while (num % d == 0) {
			factors.push(d)
			num /= d
		}
		d = d + 1
	}

	return factors
}

function max(nums) {
	max = nums[0];
	for (var i = 1; i < nums.length; i++) {
		if (nums[i] > max) {
			max = nums[i];
		}
	}
	return max
}

factors = getPrimeFactors(600851475143)
console.log(max(factors));