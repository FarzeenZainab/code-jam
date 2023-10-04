/**
       Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
      
       The minimum sum is 1 + 3 + 5 + 7 = 16  and the maximum sum is 3 + 5 + 7 + 7 = 24. The function prints 16, 24
*/

// Psuedo Code
/**
 * minSum --> for loop i = 0, i < 4, i++ --> add current item to the minSum
 * maxSum --> for loop i = 1, i < 4, i++ --> add current item to the maxSum
 * print result
 */

// Solutions
let minSum = 0;
let maxSum = 0;

let arr = [7, 69, 2, 221, 8974];

for (i = 0; i < 4; i++) {
  minSum = minSum + arr[i];
}
for (i = 1; i < 5; i++) {
  maxSum = maxSum + arr[i];
}

console.log(minSum, maxSum);
