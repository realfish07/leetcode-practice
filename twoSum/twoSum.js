/**
 * Source: https://leetcode.com/problems/two-sum/
 * 
 * 1. Two Sum
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in obj) {
      return obj[diff] > i ? [i, obj[diff]] : [obj[diff], i];
    }
    obj[nums[i]] = i;
  }
  return [];
};
