//#1
const arr = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

const sorter = (arr) => arr.sort((a, b) => a - b);
console.log(sorter(arr));

//#2

const arr2 = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

const sorter2 = (arr) => arr.sort();

console.log(sorter2(arr2));

//bonus #2

const lengthSorter = (arr) => arr.sort((a, b) => a.length - b.length);

console.log(lengthSorter(["camel", "fork", "we are the", "cat", "ok"]));
