/**
 * Source: https://leetcode.com/problems/single-number/
 * 
 * 136. Single Number
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 * Example 1:
 * Input: nums = [2,2,1]
 * Output: 1
 * 
 * Example 2:
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 * 
 * Example 3:
 * Input: nums = [1]
 * Output: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let temp = new Set();
  for (const num of nums) {
    if (!temp.delete(num)) {
      temp.add(num);
    }
  }
  return temp.values().next().value;
};

var singleNumber2 = function(nums) {
  let temp = 0;
  for (const num of nums) {
    temp ^= num;
  }
  return temp;
};
