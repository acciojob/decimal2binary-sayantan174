function threeSum(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = nums[0] + nums[1] + nums[2]; // Initialize the closest sum to the sum of the first three numbers
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum; // Update closest sum if the current sum is closer to target
      }
      if (sum < target) {
        left++; // If the current sum is less than target, move the left pointer to increase the sum
      } else if (sum > target) {
        right--; // If the current sum is greater than target, move the right pointer to decrease the sum
      } else {
        return sum; // If the current sum equals target, return it
      }
    }
  }
  return closestSum; // Return the closest sum
}

module.exports = threeSum;
