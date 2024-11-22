// Use forEach to console.log each country in the countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const country = countries.forEach((item) => console.log(item))
// Use forEach to console.log each name in the names array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num = numbers.forEach((item, index) => console.log(item))
// Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const name = names.forEach((item, index) => console.log(item))
// Use map to create a new array by changing each country to uppercase in the countries array.
const countryToUppercase = countries.map((item, index) => item.toUpperCase())
console.log(countryToUppercase);
// Use map to create an array of countries length from countries array
const lengthOfCountries = countries.map((item, index) => console.log(item.length)
)
// Use map to create a new array by changing each number to square in the numbers array
const numToSquare = numbers.map((item, index) => item * item)
console.log(numToSquare);
// Use map to map the products array to its corresponding prices
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
const prices = products.map((item, index) => item.price)
console.log(prices);
// Use filter to filter out countries containing land.
const contentLand = countries.filter((item, index) => item.includes('land'))
console.log(contentLand);
// Use filter to filter out countries having six character.
const characters = countries.filter((item, index) => item.length === 6)
console.log(characters);
// Use filter to filter out countries containing six letters and more in the country array
const sixLetters = countries.filter((item, index) => item.length >= 6)
console.log(sixLetters);
// Use filter to filter out country start with 'E'
const countryStart = countries.filter((item, index) => item.startsWith('E'))
console.log(countryStart);
// Use filter to filter out only prices with values.
const filterPrices = products.filter((item, index) => item.price !== '')
console.log(filterPrices);
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items
function getStringLists(array) {
    return array.filter(item => typeof item === 'string');

}
const result = getStringLists(["fabi", "mami", 42, true, "hello"]);
console.log(result);
// Use reduce to sum all the numbers in the numbers array.

const sum = numbers.reduce((total, item, index) => total + item)
console.log(sum);
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const northEuropean = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"]
const concatenate = northEuropean.reduce((total, item) => total + item + " , ")



console.log(concatenate + " are north European countries");
// Use some to check if some names' length greater than seven in names array
const checker = names.some((item, index) => item > 7)
console.log(checker);
// Use every to check if all the countries contain the word land
const checkLand = countries.every((item) => item.includes('land'))
console.log(checkLand);
// Use find to find the first country containing only six letters in the countries array
const finder = countries.find((item, index) => item.length === 6)
console.log(finder);
// Use findIndex to find the position of the first country containing only six letters in the countries array
const findPosition = countries.findIndex((item) => item.length === 6)
console.log(findPosition);
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products.map((item) => parseFloat(item.price)).filter((price) => !isNaN(price)).reduce((total, price) => total + price, 0)
console.log(totalPrice);
// Use the countries information, in the data folder. Sort countries by name, by capital, by population
const myCountries = [
    { country: 'English', count: 91 },
    { country: 'French', count: 45 },
    { country: 'Arabic', count: 25 },
    { country: 'Spanish', count: 24 },
    { country: 'Russian', count: 9 },
    { country: 'Portuguese', count: 9 },
    { country: 'Dutch', count: 8 },
    { country: 'German', count: 7 },
    { country: 'Chinese', count: 5 },
    { country: 'Swahili', count: 4 }
]
const getCountry = myCountries.map((country) => country.country)
const sortByName = getCountry.sort()
console.log(sortByName);











