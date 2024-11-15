// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript'
// Print the string on the browser console using console.log()
console.log(challenge)
// Print the length of the string on the browser console using console.log()
console.log(challenge.length)
// Change all the string characters to capital letters using toUpperCase() method
const upperCase = challenge.toUpperCase()
// Change all the string characters to lowercase letters using toLowerCase() method
const lowerCase = challenge.toLowerCase()
// Cut (slice) out the first word of the string using substr() or substring() method
const firstWord = challenge.substring(0, 2)
console.log(firstWord);
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
const sliceText = challenge.substring(2, 21)
console.log(sliceText);
// Check if the string contains a word Script using includes() method
const containWord = challenge.includes("Script")
console.log(containWord);
// Split the string into an array using split() method
const splitMethod = challenge.split()
console.log(splitMethod);
// Split the string 30 Days Of JavaScript at the space using split() method
const splitString = challenge.split("")
console.log(splitString);
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
const splitCompanies = companies.split(",")
console.log(splitCompanies);
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
const replaceMethod = challenge.replace('30 Days Of Python')
console.log(replaceMethod);
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
const charAtMethod = challenge.charAt(15)
console.log(charAtMethod);
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
const charCodeAtMethod = challenge.charCodeAt("J")
console.log(charCodeAtMethod);
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
const indexOfMethod = challenge.indexOf(3)
console.log(indexOfMethod);
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
const lastIndexOfMethod = challenge.lastIndexOf("a")
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction
const text = "You cannot end a sentence with because because because is a conjunction"
const findIndexOf = text.indexOf("because")
console.log(findIndexOf);
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const findLastIndexOf = text.lastIndexOf("because")
console.log(findLastIndexOf);
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const searchMethod = text.search("because")
console.log(searchMethod);
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const removeSpaces = challenge.trim()
console.log(removeSpaces);
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
const startsWithMethod = challenge.startsWith("30")
console.log(startsWithMethod);
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
const endsWithMethod = challenge.endsWith("JavaScript")
console.log(endsWithMethod);
// Use match() method to find all the a’s in 30 Days Of JavaScript
const findA = challenge.match("a")
console.log(findA);
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const firstWords = "30 Days of"
const secondWord = "JavaScript"
const singleString = firstWords + " " + secondWord
console.log(singleString);
// Use repeat() method to print 30 Days Of JavaScript 2 times
const repeatMethod = challenge.repeat(2)
console.log(repeatMethod);
// Exercise Level 2
// Using console.log() print out the following statement
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(10 === "10"); // false
console.log("10" === "10");
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(Math.round(9.8) === 10);
// Check if 'on' is found in both python and jargon
const python = "python"
const jargon = "jargon"
const test1 = python.includes("on")
console.log(test1);
const test2 = jargon.includes("on")
console.log(test2);
// hope this course is not full of jargon. Check if jargon is in the sentence.
const sentence = "hope this course is not full of jargon"
const test3 = sentence.includes("jargon")
console.log(test3);
// Generate a random number between 0 and 100 inclusively.
console.log(Math.round(Math.random() * 100));
// Generate a random number between 50 and 100 inclusively.
console.log(Math.round(Math.random() * (100 - 50 + 1) + 50))
// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256));
// Access the 'JavaScript' string characters using a random number.
const randoms = "JavaScript"
const tab = Array.from(randoms)
console.log(tab);
for (let i = 0; i < tab.length; i++) {


}


// Use console.log() and escape characters to print the following pattern.
const firstLine = "1"
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const take = text.substring(31, 54)
console.log(take);
// Exercise Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const love = "Love is the best thing in this world. Some found their love and some are still looking for their love."
const occurence = love.match(/love/gi)
console.log(occurence);
// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const texte = text.match(/because/gi)
console.log(texte);
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const totalByYear = (5000 * 12) + 10000 + (15000 * 12)
console.log(totalByYear);































