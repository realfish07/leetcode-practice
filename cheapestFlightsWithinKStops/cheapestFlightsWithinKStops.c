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

int findCheapestPrice(int n, int** flights, int flightsSize, int* flightsColSize, int src, int dst, int k){
  int* dist = (int*)malloc(sizeof(int) * n);
  memset(dist, 1, sizeof(int) * n);
  dist[src] = 0;

  for (int i = 0; i <= k; i++) {
    int* temp = (int*)malloc(sizeof(int) * n);
    for (int j = 0; j < n; j++) {
      temp[j] = dist[j];
    }
    for (int j = 0; j < flightsSize; j++) {
      int* flight = flights[j];
      if (flight[1] == src) continue;
      if (dist[flight[1]] > temp[flight[0]] + flight[2]) {
        dist[flight[1]] = temp[flight[0]] + flight[2];
      }
    }
    free(temp);
  }
  return dist[dst] == 0x01010101 ? -1 : dist[dst];
}
