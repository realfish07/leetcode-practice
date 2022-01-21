/**
 * Source: https://leetcode.com/problems/longest-common-prefix/
 * 
 * 14. Longest Common Prefix
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';

  strs.sort();
  for (const [i, char] of [...strs[0]].entries()) {
    if (char !== strs[strs.length - 1][i]) {
      return strs[0].slice(0, i);
    }
  }
  return strs[0];
};

var longestCommonPrefix2 = function(strs) {
  if (!strs.length) return '';

  for (const [i, char] of [...strs[0]].entries()) {
    for (let j = 0; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};
