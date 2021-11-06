/**
 * Determine whether there exists a one-to-one character mapping from one string s1 to another s2
 * Ex: given s1 = "abc" and s2 = "bcd", return true since we can map a to b, b to c, c to d
 * Ex: given s1 = "foo" and s2 = "bar", return false since "o" cannot be mapped to two separate characters
 */

const str1 = "abc";
const str2 = "bcd";

const stringMap = new Map();

const arr1 = str1.split("");
const arr2 = str2.split("");

for (let i = 0; i < arr1.length; i++) {
    if (!!stringMap.get(arr1[i])) { console.log('Character already mapped ', arr1[i])}
    stringMap.set(arr1[i], arr2[i])
}

if (arr1.length === arr2.length && stringMap.size === arr1.length) {
    console.log('Success, 1:1 mapping ', stringMap)
} else { console.log('Fail, duplicate characters: ', stringMap)};


