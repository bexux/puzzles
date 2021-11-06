/**
 * There are N mice and N holes placed at integer points along a line.
 * Given this, find a method that maps mice to holes such that the largest number of steps any mouse takes is minimized.
 * Each move consists of moving one mouse on one unit to the left or right, and only one mouse can fit inside each hole.
 * 
 * Ex: mice positioned at [1, 4, 9, 15]
 * and holes positioned at [10, -5, 0, 16]
 * In this case, the best pairing would require us to send
 * mouse at 1 to hole -5, and the function returns 6
 * (1 > 0 > -1 > -2 > -3 > -4 > -5) 6 steps.
 */

function difference(a, b) {
    return Math.abs(a - b);
}

function sortNum(a, b) {
    return a - b;
}

let mice = [1, 4, 9, 15];
let holes = [10, -5, 0, 16];
let mice2 = [-10, -79, -79, 67, 93, -85, -28, -94];
let holes2 = [2, 9, 69, 25, -31, 23, 50, 78];

function distanceToHole(mice, holes) {
    let distance = 0;
    const sortedMice = mice.sort(sortNum);
    const sortedHoles = holes.sort(sortNum);

    for (i = 0; i < sortedMice.length; i++) {
        const diff = difference(sortedMice[i], sortedHoles[i]);
        if (diff > distance) { distance = diff }
    }

    return distance;
}

console.log('largest distance is ', distanceToHole(mice, holes)); // 6
console.log('largest distance is ', distanceToHole(mice2, holes2)); // 102
