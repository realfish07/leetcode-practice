/**
 * Source: https://leetcode.com/problems/reverse-integer/
 * 
 * 7. Reverse Integer
 * 
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * 
 * Example 1:
 * Input: x = 123
 * Output: 321
 * 
 * Example 2:
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * Input: x = 120
 * Output: 21
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const max = 2**31 - 1;
  const min = -(2**31)
  let ans = 0;
  while(x !== 0) {
    const r = x % 10;
    if (ans > (max - r) / 10 || ans < (min - r) / 10) {
      return 0;
    }
    ans = ans * 10 + r;
    x = ~~(x / 10);
  }
  return ans;
};
