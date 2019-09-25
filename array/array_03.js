// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// Input: [10, 15, 3, 7] and k of 17
// return true (since 10 + 7 is 17)

// Given array, return boolean

function detectMultiples(newArray, k) {
  return newArray.find(num => newArray.indexOf(k - num) !== -1) > 0;
}

console.log(detectMultiples([10, 15, 3, 7], 17));

