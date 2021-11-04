/**
 * Source: https://leetcode.com/problems/rotate-array/
 * 
 * 189. Rotate Array
 * 
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 * Example 2:
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 * Explanation: 
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate1 = function(nums, k) {
  k %= nums.length;
  if (k <= 0) return;

  let prevPos = 0;
  let curPos = 0;
  let cur = nums[curPos];
  for (let i = 0; i < nums.length; i++) {
    let nextPos = (curPos + k) % nums.length;
    let next = nums[nextPos];
    nums[nextPos] = cur;
    curPos = nextPos;
    cur = next;

    // if meet a circle, move to the next
    if (prevPos === curPos) {
      prevPos = ++curPos;
      cur = nums[curPos];
    }
  }
};

// (AB)^T = B^TA^T
var rotate2 = function(nums, k) {
  k %= nums.length;
  if (k <= 0) return;

  const reverse = (nums, start = 0, end = nums.length - 1) => {
    while(start < end) {
      // swap
      nums[start] ^= nums[end]; // nums[start]: nums[start] ^ nums[end]
      nums[end] ^= nums[start]; // nums[end]: nums[start]
      nums[start++] ^= nums[end--]; // nums[start]: nums[end]
    }
  }
  reverse(nums);
  reverse(nums, 0, k - 1);
  reverse(nums, k);
}
