/**
 * Source: https://leetcode.com/problems/cheapest-flights-within-k-stops/
 * 
 * 787. Cheapest Flights Within K Stops
 * 
 * There are n cities connected by some number of flights.
 * You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
 * You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.
 * 
 * Example 1:
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
 * Output: 200
 * 
 * Example 2:
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
 * Output: 500
 * 
 * Constraints:
 * - flights[i].length == 3
 * - 0 <= from, to < n
 * - from != to
 * - 1 <= price
 * - There will not be any multiple flights between two cities.
 * - 0 <= src, dst, k < n
 * - src != dst
 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  let dist = new Array(n).fill(Infinity);
  const K = n - k < 2 ? n - 2 : k;

  dist[src] = 0;
  for (let i = 0; i <= K; i++) {
    const temp = [...dist];
    for (const flight of flights) {
      if (flight[1] === src) continue;
      temp[flight[1]] = Math.min(temp[flight[1]], dist[flight[0]] + flight[2]);
    }
    dist = temp;
  }
  return dist[dst] === Infinity ? -1 : dist[dst];
};
