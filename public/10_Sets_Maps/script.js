// create an empty set
const mySet = new Set()
// Create a set containing 0 to 10 using loop
for (let i = 0; i < 11; i++) {
    mySet.add(i)
}

// Remove an element from a set
mySet.delete(2)
console.log(mySet);
// Clear a set
mySet.clear()
// Create a set of 5 string elements from array
const tabString = ["sea", "beach", "world", "sing", "home"]
const setStrings = new Set(tabString)
console.log(setStrings);
// Create a map of countries and number of characters of a country
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const setCountries = new Map()
for (const element of countries) {
    setCountries.set(element[0], element[0].length);
}
console.log(setCountries);
// Exercise Level 2
// Find a union b
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let c = [...a, ...b]
const union = new Set(c)
console.log(union);
let i = [1, 2, 3, 4];
let m = [3, 4, 5, 6];

let e = new Set(i);
let f = new Set(m);

// Find the intersection
let d = [...e].filter((num) => f.has(num));
let C = new Set(d);

console.log(C);
// Find a with b
const unionAwithB = [...a, ...b]
console.log(unionAwithB);







