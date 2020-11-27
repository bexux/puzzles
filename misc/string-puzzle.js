/*
* Given a word and a string S, find all starting indices in S which are anagrams of word.
* For example, given that word is “ab”, and S is “abxaba”, return 0, 3, and 4.
*/


// Solution 1 - comparing arrays
function checkLettersMatch(stringA, wordA, StringIndex, WordIndex) {
  return stringA[StringIndex] === wordA[WordIndex];
}

// Returns indices:
function findIndices(string, word) {
  let mySet = new Set();  // prevent duplications of indices

  // convert strings to array ['a', 'b', 'x', 'a', 'b', 'a'] and ['a', 'b']
  const stringArray = string.split('');
  const wordArray = word.split('');

  // Array of indices [0, 3, 5]
  const startingPoints = initialIndices(stringArray, wordArray);
  const forwardNum = startingPoints.filter(num => forward(stringArray, wordArray, num));
  const backwardNum = startingPoints.filter(num => backward(stringArray, wordArray, num)).map(n => n - (wordArray.length -1));
  const concatArray = forwardNum.concat(backwardNum);
  concatArray.map(c => mySet.add(c));
  return [...mySet];  // [0, 3, 4]
}

function forward(s, w, index) {
  let success = false;
  for (let i = 1; i < w.length; i++) { // iterating word, we know first one already matched  length is 2.   1  2
    if (!checkLettersMatch(s, w, index + i, i)) {
      break;
    }

    success = true;
  }

  return success;
}

function backward(s, w, index) {
  let success = false;
  for (let i = 1; i < w.length; i++) { // iterating word, we know first one already matched  length is 2.   1  2
    if (!checkLettersMatch(s, w, index - i, i)) {
      break;
    }
    success = true;
  }

  return success;
}

function initialIndices(stringA, wordA) {
  let newArray = [];
  stringA.map((s, index) => {
      if (s === wordA[0]) {
          newArray.push(index);
      }
    })

  return newArray;
}

// Solution 2 - using string's indexOf
function findInString(s, w) {
  let copyOfString = s;
  const reverseString = s.split('').reverse().join('');
  let mySet = new Set();

  for (let i = 0; i <= s.length; i++) {
    const forwardIndex = copyOfString.indexOf(w);       // search for 'oc' in copyOfString
    if (forwardIndex === -1 ) { break; }
    mySet.add(forwardIndex + i);
    copyOfString = copyOfString.slice(1);              // remove first letter off string
  }

  for (let i = 0; i <= s.length; i++) {
    const reverseIndex = reverseString.indexOf(w);
    if (reverseIndex === -1 ) { break; }
    mySet.add(s.length - reverseIndex - w.length);   // 6 - 0 - w.length
  }

  return [...mySet];
}

console.log(findIndices('abxaba', 'ab'));   // [0, 3, 4]
console.log(findIndices('otto', 'ot'));     // [0, 2]
console.log(findIndices('tacocat', 'oc'));  // [3, 2]

console.log('findInString ', findInString('abxaba', 'ab'));   // [0, 3, 4]
console.log('findInString ', findInString('otto', 'ot'));     // [0, 2]
console.log('findInString ', findInString('tacocat', 'oc'));  // [3, 2]
