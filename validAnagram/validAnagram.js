/**
 * Source: https://leetcode.com/problems/valid-anagram/
 * 
 * 242. Valid Anagram
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 104
 * s and t consist of lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
    arr[t.charCodeAt(i) - 97]--;
  }
  for (const count of arr) {
    if (count) return false
  }
  return true;
};

var isAnagram2 = function(s, t) {
  if (s.length !== t.length) return false;

  const obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s.charCodeAt(i) - 97] = (obj[s.charCodeAt(i) - 97] || 0) + 1;
    obj[t.charCodeAt(i) - 97] = (obj[t.charCodeAt(i) - 97] || 0) - 1;
  }
  for (const key in obj) {
    if (obj[key]) return false;
  }
  return true;
};
