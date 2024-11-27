// Exercise Level 1
// Display the countries array as a table
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

// Display the countries object as a table
const pays = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}

// Use console.group() to group logs
console.group("Countries")
console.table(countries)
console.table(pays)
console.groupEnd()
// Exercises:Level 2
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10)
// Write a warning message using console.warn()
console.warn("This is a warning")
// Write an error message using console.error()
console.error("This is an error message")
