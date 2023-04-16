function threeSum(num) {
// write your code here
  let b = 0;
  let i = 1;
  while (a != 0) {
    let rem = a % 2;
    b = b + rem * i;
    i = i * 10;
    a = Math.floor(a / 2);
  }
  return b;
}

module.exports = threeSum;
