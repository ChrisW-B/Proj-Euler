function isPrime(num) {
	for (var i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

function getNumPrimes(max) {
	var primes = [];
	i = 2;
	while (primes.length < max) {
		if (isPrime(i)) {
			primes.push(i);
		}
		i++;
	}
	return primes
}

function getPrimeNum(num) {
	var primes = getNumPrimes(num);
	return primes.pop();
}

console.log(getPrimeNum(10001));