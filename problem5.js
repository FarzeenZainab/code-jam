/**
 * Given an array of integers, where all elements but one occur twice, find the unique element
 *
 * Example: [1, 2, 3, 4, 3, 2, 1]
 */

/**
 *
 * for(a[i])
 * curr -> a[0]
 * count a[0] -> 0
 *
 *    for(a[j]){
 *       loop again over the array and match curr
 *        curr === a[j] ? 'count + 1' : 'continue'
 *    }
 *
 * count > 2 ? continue : currUniq = a[i]
 *
 *
 *  */

const lonelyinteger = (a) => {
  let currUniq = null;
  let checkFor;

  for (let i = 0; i <= a.length - 1; i++) {
    let count = 0;
    checkFor = a[i];

    for (let j = 0; j <= a.length - 1; j++) {
      if (checkFor === a[j]) {
        count++;
      } else continue;
    }

    if (count >= 2) {
      continue;
    } else {
      currUniq = a[i];
    }
  }
  return currUniq;
};

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
