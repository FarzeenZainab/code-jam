/**
  There is a collection of input strings and a collection of query strings. For each query string,
  determine how many time it occurs in the list of input string. Return an array of the results
 
  Strings: ['ab', 'ab', 'abc']
  Queries: ['ab', 'abc', 'bg']

  There are 2 instances of ab, 1 of abc and 0 of bg. For each query, add an element to the return array. result [2, 1, 0]
 
  Input format -> 
  1st line -> the size of the strings[]
  2nd line -> Each of the next line will contains a string strings[i]
  3rd line -> the size of the queries
  4th line -> queries[i]

  */

// Cases

// pseudo code
/**
 * let currQuery => holds the current query string
 * let occurances = 0
 * const result = []
 * loop over strings array and look for currQuery === strings[i]
 *    if true occurances++
 *    if no occurance -> push zero
 * When finished -> push occurances to the results array
 */

// const strings = ["def", "de", "fgh"];
// const queries = ["de", "lmn", "fgh"];

const strings = [
  "abcde",
  "sdaklfj",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
  "na",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
];
const queries = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];

const matchingStrings = (strings, queries) => {
  let occurance = 0;
  const result = [];

  queries.forEach((query) => {
    strings.forEach((string) => {
      query === string && occurance++;
    });
    result.push(occurance);
    occurance = 0;
  });

  return result;
};

console.log(matchingStrings(strings, queries));
