// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// Input: [1, 2, 3, 4, 5]
// Output should be: [120, 60, 40, 30, 24]

// Input: [3, 2, 1]
// Output would be [2, 3, 6]

function reduceThis(newArray) {
  return newArray.map(num => {
    return (newArray.reduce((total, current) => total * current)) / num;
  });
}

console.log(reduceThis([3, 2, 1]));

// What if you can't use division?

function reduceThisNoDivision(newArray) {
  return newArray.map((index) => {
    return newArray.filter(i => i !== index).reduce((total, current) => total * current);
  });
}

console.log(reduceThisNoDivision([1, 2, 3, 4, 5]));