/**
 * Source: https://leetcode.com/problems/single-number-ii/
 * 
 * 137. Single Number II
 * 
 * Given an integer array nums where every element appears three times except for one, which appears exactly once.
 * Find the single element and return it.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 * Example 1:
 * Input: nums = [2,2,3,2]
 * Output: 3
 * 
 * Example 2:
 * Input: nums = [0,1,0,1,0,1,99]
 * Output: 99
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let temp = new Map();
  for (const num of nums) {
    temp.set(num, (temp.get(num) ?? 0) + 1);
  }
  for (const key of temp.keys()) {
    if (temp.get(key) === 1) return key;
  }
  return temp.keys().next().value;
};

var singleNumber2 = function(nums) {
  let ones = 0, twos = 0;
  
  // 1 & ~1 = 0
  for (const n of nums) {
    ones = ones^n & ~twos;
    twos = twos^n & ~ones;
  }
  return ones;
};
