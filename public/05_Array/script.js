// Declare an empty array;
const tab = []
// Declare an array with more than 5 number of elements
const fruits = ["orange", "melon", "mangue", "pomme", "fraise"]
// Find the length of your array
console.log(fruits.length);
// Get the first item, the middle item and the last item of the array
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[4]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, "love", 3, "peace", "water", "mountain", "sun"]
const lengthMixesDataTypes = mixedDataTypes.length
console.log(lengthMixesDataTypes);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);
// Print out each company
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6]);
// Change each company name to uppercase one by one and print them out
const facebook = itCompanies[0].toUpperCase()
const google = itCompanies[1].toUpperCase()
const microsoft = itCompanies[2].toUpperCase()
const apple = itCompanies[3].toUpperCase()
const IBM = itCompanies[4].toUpperCase()
const oracle = itCompanies[5].toUpperCase()
const amazon = itCompanies[6].toUpperCase()
console.log(facebook, google, microsoft, apple, IBM, oracle, amazon);
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentence = itCompanies.join()
const text = sentence + " are big IT companies"
console.log(text);
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("Oracle")) {
    console.log('Oracle exist');


} else {
    console.log('company is not found');


}
// Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i]) {
        console.log(itCompanies[i]);
    } else {
        console.log('company is not found');
    }
}
// Sort the array using sort() method
const sortArray = itCompanies.sort()
console.log(sortArray);
// Reverse the array using reverse() method
const reverseArray = itCompanies.reverse()
console.log(reverseArray);
// Slice out the first 3 companies from the array
const takeThreeCompanies = itCompanies.slice(0, 3)
console.log(takeThreeCompanies);
console.log(itCompanies);

// Slice out the last 3 companies from the array
const threeLastCompanies = itCompanies.slice(4, 7)
console.log(threeLastCompanies);
// Slice out the middle IT company or companies from the array
const middleIT = itCompanies.slice(3, 4)
console.log(middleIT);
// Remove the first IT company from the array
const removeFirstElement = itCompanies.shift()
// Remove the middle IT company or companies from the array
itCompanies.splice(2, 4)
console.log(itCompanies);
// Remove the last IT company from the array
const remove = itCompanies.pop()
console.log(itCompanies);
// Remove all IT companies
const removeAllItems = itCompanies.splice(0, 5)
console.log(itCompanies);
// First remove all the punctuations and change the string to array and count the number of words in the array
let texte =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
texte = texte.replace(",", "");
const myArray = texte.split(" ")
console.log(myArray);
// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const addMeat = shoppingCart.unshift("Meat")
const addSugar = shoppingCart.push("Sugar")
const removeHoney = shoppingCart.splice(4, 1)
shoppingCart[3] = "Green Tea"
console.log(shoppingCart);
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
if (countries.includes("Eyhiopia")) {
    console.log("Ethiopia");

} else {
    countries.push("Ethiopia")
    console.log(countries);


}
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const techs = ["JavaScript", "Angular", "React"]
if (techs.includes("Sass")) {
    console.log('Sass');


} else {
    techs.push("Sass")
    console.log(techs);


}
// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
// 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
const sortAges = ages.sort((a, b) => a - b)
console.log(sortAges);
const minAge = Math.min(19, 22, 19, 24, 20, 25, 26, 24, 25, 24)
const maxAge = Math.max(19, 22, 19, 24, 20, 25, 26, 24, 25, 24)
console.log(minAge, maxAge);
// Find the median age(one middle item or two middle items divided by two)
const medianAge = ages.length / 2
console.log(medianAge);
// Find the average age(all items divided by number of items)
const sum = ages.reduce((a, b) => a + b, 0)
const averageAge = Math.floor(sum / ages.length)
console.log(averageAge);
// Find the range of the ages(max minus min)
const range = maxAge - minAge
console.log(range);
const diffMin = Math.abs(minAge - averageAge);
const diffMax = Math.abs(maxAge - averageAge);
// Slice the first ten countries from the countries array
const sliceTenFirstCountries = countries.splice(0, 11)
console.log(countries);
// Find the middle country(ies) in the countries array
const countriesLength = countries.length
console.log(countriesLength);

let findMid = Math.floor(countries.length / 2)
console.log(findMid);
if (countriesLength % 2 === 0) {
    findMid = [countries[findMid
        - 1], countries[findMid]];

} else {
    findMid = [countries[findMid]];
    console.log(findMid);


}

const middle = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, middle);
const secondHalf = countries.slice(middle);
console.log(firstHalf);
console.log(secondHalf);

















