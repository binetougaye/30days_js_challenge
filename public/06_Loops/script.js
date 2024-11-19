// Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let i = 0; i < 11; i++) {
//     console.log(i);

// }
// let i = 0
// do {
//     console.log(i);
//     i++

// } while (i < 11);
// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
    console.log(i);

}
let i = 10
do {
    console.log(i);
    i--

} while (i >= 0);
// Write a loop that makes the following pattern using console.log():
let test = ""
let tab = ["#",
    "##",
    "###",
    "####",
    "#####",
    "######",
    "#######"]
for (let i = 0; i < tab.length; i++) {
    test = tab[i]
    console.log(test);
}
// Level 2
// Using the above countries array, create the following new array.
const countries = [
    "Rome",
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
let newArray = []
for (const element of countries) {
    newArray = element.toUpperCase()
    console.log(newArray);
}
// Using the above countries array, create an array for countries length'.
let countryLength = []
for (const element of countries) {
    countryLength.push(element.length)


}
console.log(countryLength);
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const pays = ['Finland', 'Ireland', 'Iceland']
const newPays = []
for (const element of pays) {
    if (element.includes("land")) {
        newPays.push(element)
        console.log(newPays);

    } else {
        console.log("All these countries are without land'");

    }
}
// Using the above countries array, find the country containing the biggest number of characters.
const myCountries = ['Albania', 'Bolivia', 'Ethiopia']
let longestCountry = ""

for (let i = 0; i < myCountries.length; i++) {
    if (myCountries[i].length > longestCountry.length) {
        longestCountry = myCountries[i]; // Update if current country is longer
    }
}
console.log(longestCountry);
// Using the above countries array, find the country containing only 5 characters.
const country = ['Japan', 'Kenya']
let fiveCharacters = 5
for (let i = 0; i < country.length; i++) {
    if (fiveCharacters > country.length) {
        fiveCharacters = country[i]
    }



}
console.log(fiveCharacters);
// Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
let longestWord = ""
for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > longestCountry.length) {
        longestWord = webTechs[i]
    }

}
console.log(longestWord);
// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const techsAndLength = []

for (let i = 0; i < webTechs.length; i++) {
    techsAndLength.push([webTechs[i], webTechs[i].length]);
}

console.log(techsAndLength);


// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = ''; // Variable pour stocker l'acronyme

for (let i = 0; i < mernStack.length; i++) {
    acronym += mernStack[i][0]; // Ajoute la première lettre de chaque élément
}

console.log(acronym); // Output : MERN
// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < techs.length; i++) {
    console.log(techs[i]);


}
// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruit = ['banana', 'orange', 'mango', 'lemon']
const reverseFruits = fruit.reverse()
console.log(reverseFruits);
// Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

const fullStacks = fullStack[0].concat(fullStack[1])
console.log(fullStacks);

for (let i = 0; i < fullStacks.length; i++) {
    console.log(fullStacks[i]);
}

// Level 3
// Copy countries array(Avoid mutation)
const countries2 = countries.slice()
console.log(countries2);
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = countries2.sort()
console.log(sortedCountries);
// Sort the webTechs array and mernStack array
const sortedWebtechs = webTechs.sort()
const sortedMernStacks = mernStack.sort()
console.log(sortedWebtechs, sortedMernStacks);
// Extract all the countries contain the word 'land' from the countries array and print it as array
const countriesLand = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
        console.log(countriesLand.push(countries[i]));

    }
}

console.log(countriesLand);
// Find the country containing the hightest number of characters in the countries array


let longestWords = ""
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longestWords.length) {
        longestWords = countries[i]
    }

}
console.log(longestWords);
// Extract all the countries containing only four characters from the countries array and print it as array
let characters = []
let charactersLength = 4
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 4) {
        characters.push(countries[i])
    }

}
console.log(characters);
// Reverse the countries array and capitalize each country and stored it as an array
const reverseCountries = countries.reverse()
let capitalize = []
console.log(reverseCountries)
for (let i = 0; i < reverseCountries.length; i++) {

    console.log(reverseCountries[i].slice(0, 1).toUpperCase() + reverseCountries[i].slice(1));


}









