/**
 * Source: https://leetcode.com/problems/count-and-say/
 * 
 * 38. Count and Say
 * 
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * countAndSay(1) = "1"
 * countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
 * To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character.
 * Then for each group, say the number of characters, then say the character.
 * To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
 * 
 * Given a positive integer n, return the nth term of the count-and-say sequence.
 * 
 * Example 1:
 * Input: n = 1
 * Output: "1"
 * 
 * Example 2:
 * Input: n = 4
 * Output: "1211"
 * Explanation:
 * countAndSay(1) = "1"
 * countAndSay(2) = say "1" = one 1 = "11"
 * countAndSay(3) = say "11" = two 1's = "21"
 * countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1';

  const str = countAndSay(n - 1);
  let num = 1, res = '';
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      num++;
    } else {
      res += `${num}${str[i - 1]}`;
      num = 1;
    }
  }
  res += `${num}${str[str.length - 1]}`;
  return res;
};

var countAndSay2 = function(n) {
  if (n === 1) return '1';

  let str = '1';
  for (let i = 2; i <= n; i++) {
    let num = 1, res = '';
    for (let j = 1; j < str.length; j++) {
      if (str[j] === str[j - 1]) num++;
      else {
        res += `${num}${str[j - 1]}`;
        num = 1;
      }
    }
    res += `${num}${str[str.length - 1]}`;
    num = 1;
    str = res;
  }
  return str;
};
