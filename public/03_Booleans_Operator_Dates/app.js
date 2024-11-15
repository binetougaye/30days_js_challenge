// Exercise Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = "Fatou Binetou";
const lastName = "Gaye"
const country = "Senegal"
const city = 'Dakar'
const age = 25
const isMarried = false
const year = 1998
console.log(typeof (firstName), typeof (lastName), typeof (country), typeof (city), typeof (age), typeof (isMarried), typeof (year));
// Check if type of '10' is equal to 10
console.log("10" == 10);
// Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10);
// Write three JavaScript statement which provide truthy value.
console.log("10" === "10");
console.log(4 > 3);
console.log(10 + 5 > 5);
// Write three JavaScript statement which provide falsy value.
console.log(5 === '5');
console.log(10 + 5 !== 15);
console.log(4 > 3 && 6 > 7);
// Find the length of python and jargon and make a falsy comparison statement.
const python = "python"
const jargon = "jargon"
console.log(python.length, jargon.length);
const falsy = python.length !== jargon.length
console.log(falsy);
// What is the year today?
const date = new Date()
const years = date.getFullYear()
console.log(years);
// What is the month today as a number?
const month = date.getMonth()
console.log(month);
// What is the date today?
console.log(date);
// What is the day today as a number?
const today = date.getDate()
console.log(today);
// What is the hours now?
const hours = date.getHours()
console.log(hours);
// What is the minutes now ?
const minutes = date.getMinutes()
console.log(minutes);
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const seconds = date.getTime()
console.log(seconds);

// Exercise Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// const base = prompt("Saisir la base")
// const height = prompt("Saisr la hauteur")
// const area = Number(base) * 0.5 * Number(height)
// alert("La surface du triangle est " + area)
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// const sideA = prompt("Side A")
// const sideB = prompt("Side B")
// const sideC = prompt("Side C")
// const perimeter = Number(sideA) + Number(sideB) + Number(sideC)
// alert("Le périmétre du triangle est " + perimeter)
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// const length = prompt("Saisir la longueur")
// const width = prompt("Saisir la largeur")
// const area = Number(length) * Number(width)
// const perimetre = 2 * (length + width)
// alert("La surface  du triangle est de: " + area)
// alert("Le périmètre est de: " + perimetre)
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const rayon = prompt("Saisir le rayon de votre circle")
// const pi = 3.14
// const area = pi * rayon * rayon
// alert("La surface du cercle est de " + area)
// const circumference = 2 * pi * rayon
// alert('La circonférence du cercle est de ' + circumference)
// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// const heures = prompt("Entrer le nombre d'heures")
// const paieParHeure = prompt("Entrer votre gain par heure")
// const gainParWeek = heures * paieParHeure
// alert("Vous gagnez " + gainParWeek)
// If the length of your name is greater than 7 say, your name is long else say your name is short.
// const nom = prompt("Saisir votre nom")
// if (nom.length > 7) {
//     alert("Your name is long")
// } else {
//     alert("Your name is short")
// }
// Compare your first name length and your family name length and you should get this output.
// const prenom = prompt('Saisir votre prénom')
// const noms = prompt("Saisir votre nom")
// if (prenom.length > noms.length) {
//     alert("Ton prénom " + prenom + " est supérieur à ton nom " + noms)
// } else {
//     alert("Ton nom " + noms + " est supérieur à ton prénom" + prenom)
// }
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// const birthday = prompt("Année de naissance ")
// const ageUser = years - birthday
// console.log(ageUser);

// if (ageUser > 18) {
//     alert("You can drive")
// } else {
//     alert("Sorry!You can't drive")
// }
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// const numberOfYears = prompt("Enter the number of years")
// const secondsInOneYear = 365 * 24 * 60 * 60;
// const numberOfSeconds = secondsInOneYear * numberOfYears
// alert('Vous avez vécu ' + numberOfSeconds + 'secondes')
// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
const dateTime = years + "-" + month + '-' + today + hours + ":" + minutes
document.write(dateTime)
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
const timeFormat = years + "-" + month + '-' + today + "0" + hours + "0" + minutes
document.write(timeFormat)











