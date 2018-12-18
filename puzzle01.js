/**
* Convert {"a" :4, "b" :3,"d" :2,"c":1}
* Into [a, b, c, d], [a, b, d] ... So on
**/

// Solution 1
newObj = {"a" :4, "b" :3,"c":1, "d" :2};

let finalArray = [];
let newArray = [];

// Convert to an array to sort
for (var key in newObj) {
	newArray.push([key, newObj[key]]);
}

// [["a", 4], ["b", 3], ["c", 1], ["d", 2]]

newArray.sort(function(a, b) {
    return b[1] - a[1];
});

// [["a", 4], ["b", 3], ["d", 2], ["c", 1]]

// Count down from the highest val int, in the object
for (let i =0; i < newArray[0][1]; i++) {
	let tempArray = [];
	newArray.map(val => {
		if (val[1] > i) { tempArray.push(val[0]);}
		return  val;
	});
	finalArray.push(tempArray);
}

// Solution 2

let newOrder = Object.values(newObj).sort(); // 1,2,3,4
let solution2 = [];
newOrder.map(val => {
	let newArray = [];
	for (var key in newObj) {
        if (newObj[key] >= val) {
			newArray.push(key);
		}
	}
	solution2.push(newArray);
});
