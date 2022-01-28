/**
 * Source: https://leetcode.com/problems/first-unique-character-in-a-string/
 * 
 * 387. First Unique Character in a String
 * 
 * Given a string s, find the first non-repeating character in it and return its index.
 * If it does not exist, return -1.
 * 
 * Example 1:
 * Input: s = "leetcode"
 * Output: 0
 * 
 * Example 2:
 * Input: s = "loveleetcode"
 * Output: 2
 * 
 * Example 3:
 * Input: s = "aabb"
 * Output: -1
 * 
 * Constraints:
 * 1 <= s.length <= 105
 * s consists of only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const temp = map.get(s[i]);
    map.set(s[i], temp ? { index: temp.index, count: temp.count + 1 } : { index: i, count: 1 });
  }
  for (const value of map.values()) {
    if (value.count === 1) return value.index;
  }
  
  return -1;
};

var firstUniqChar2 = function(s) {
  const arr = new Array(26);
  arr.fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - 97]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (arr[s[i].charCodeAt() - 97] === 1) return i;
  }
  return -1;
};
