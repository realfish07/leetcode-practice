/**
 * Source: https://leetcode.com/problems/implement-strstr/
 * 
 * 28. Implement strStr()
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * Clarification:
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 * 
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * Example 3:
 * Input: haystack = "", needle = ""
 * Output: 0
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle.length) return 0;
  
  const reg = new RegExp(needle);
  return haystack.search(reg);
};

var strStr2 = function(haystack, needle) {
  if (!needle.length) return 0;
 
  return haystack.indexOf(needle);
};
