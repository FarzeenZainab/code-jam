/**
        Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

        Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.
        
*/

// Psuedo Code
/**
 * arr.forEach
 *      ele is +ve --> +1 in positive
 *      ele is -ve --> +1 in negatives
 *      ele is zero --> +1 in zeros
 *
 * finding fractions
 *      positive/arr.length
 *      negatives/arr.length
 *      zeros/arr.length
 *
 * return result
 */

// Solutions
let positives = 0;
let negatives = 0;
let zeros = 0;

const arr = [-4, 3, -9, 0, 4, 1];
const arrLength = arr.length;
let precision = 6;

arr.forEach((ele) => {
  ele > 0 && positives++;
  ele < 0 && negatives++;
  ele === 0 && zeros++;
});

let posRation = (positives / arrLength).toFixed(precision);
let negRation = (negatives / arrLength).toFixed(precision);
let zeroRation = (zeros / arrLength).toFixed(precision);

console.log(posRation);
console.log(negRation);
console.log(zeroRation);
