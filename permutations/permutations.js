/**
 * Source: https://leetcode.com/problems/permutations/
 * 
 * 46. Permutations
 * 
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * 
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length <= 1) return [nums];
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    const res = permute([...nums.slice(i + 1), ...nums.slice(0, i)]);
    for (let j = 0; j < res.length; j++) {
      ans.push([nums[i], ...res[j]]);
    }
  }
  return ans;
};
