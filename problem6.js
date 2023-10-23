/**
 * You will be given a list of 32 bit unsigned integers. Flip all the bits (1-->0 and 0-->1) and return the result as an unsigned integer
 *
 * ------------
 * Example:
 * ------------
 * input 9(base 10) = 1001(base 2) (how to do that)
 * working with 32 bit unsigned int
 * 1001 --> 00000000000000000000000000001001 (32 bit representation)
 * convert 0 --> 1 and 1 --> 0 (111111111111111111111111111111110110)
 * convert it back to base 10
 *
 * ----------
 * Research
 * ----------
 * Convert base 10 to base 2:
 * - keep diving the number with 2 and save remainder of each division
 * - keep track of quotient and remainder
 * - stop when quotient is 0
 */

const flippingBits = (n) => {
  let remainder = "";
  let quotient = n;
  let nBase2 = null;
  let nSignedInt = null;

  const convertToBase2 = (n) => {
    if (n !== 0) {
      quotient = Math.floor(n / 2);
      remainder += n % 2;
      convertToBase2(quotient);
      return remainder;
    } else {
      return;
    }
  };

  const convertToSignInt = (n) => {
    return n.padStart(32, "0");
  };

  const reverse0and1 = (string) => {};

  nBase2 = convertToBase2(n);
  nSignedInt = convertToSignInt(nBase2);

  return nSignedInt;
};

console.log(flippingBits(9));
