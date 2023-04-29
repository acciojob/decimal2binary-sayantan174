function threeSum(decimal, target) {
	let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary || '0'; // Return '0' for input of 0
}

module.exports = threeSum;
