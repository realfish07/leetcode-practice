/**
 * Source: https://leetcode.com/problems/excel-sheet-column-title/
 * 
 * 168. Excel Sheet Column Title
 * 
 * Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
 * For example:
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 * 
 * Example 1:
 * Input: columnNumber = 1
 * Output: "A"
 * 
 * Example 2:
 * Input: columnNumber = 28
 * Output: "AB"
 * 
 * Example 3:
 * Input: columnNumber = 701
 * Output: "ZY"
 */

char * convertToTitle(int columnNumber){
  char *str = (char *)calloc(100, sizeof(char));
  int len = 0;
  while(columnNumber > 0) {
    int temp = columnNumber % 26 ? columnNumber % 26 : 26;
    *(str + len++) = temp + 'A' - 1;
    columnNumber = (columnNumber - temp) / 26;
  }
  char *ans = (char *)calloc(len + 1, sizeof(char));
  for (int i = 0; i < len; i++) {
    *(ans + i) = *(str + len - i - 1);
  }
  free(str);
  return ans;
}
