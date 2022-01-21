/**
 * Source: https://leetcode.com/problems/power-of-two/
 * 
 * 231. Power of Two
 * 
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2^x.
 * 
 * Example 1:
 * Input: n = 1
 * Output: true
 * Explanation: 2^0 = 1
 * 
 * Example 2:
 * Input: n = 16
 * Output: true
 * Explanation: 2^4 = 16
 * 
 * Example 3:
 * Input: n = 3
 * Output: false
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  //     4 -> 100
  //     3 -> 011
  // 4 & 3 -> 000
  return n > 0 && (n & n-1) == 0;
};
