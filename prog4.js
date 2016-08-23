function isPalindrome(num) {
	str = num + "";
	for (var i = 0;
		(i < str.length) && (i < str.length - (i + 1)); i++) {
		if (str[i] != str[str.length - (i + 1)]) {
			return false;
		}
	}
	return true;
}

function maxNum(nums) {
	max = nums[0];
	for (var i = 1; i < nums.length; i++) {
		if (nums[i] > max) {
			max = nums[i];
		}
	}
	return max;
}

function findLargestNum(max) {
	var pals = []
	for (var i = max; i > 100; i--) {
		for (var j = i - 1; j > 100; j--) {
			if (isPalindrome(i * j))
				pals.push(i * j)
		}
	}
	return maxNum(pals);
}

console.log(findLargestNum(999))