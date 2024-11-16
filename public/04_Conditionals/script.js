// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// const age = prompt("Enter your age")
// if (age > 18) {
//     alert("You are old enought to drive")
// } else if (age < 18) {
//     const yourAge = 18 - age
//     alert("You are left with " + yourAge + " years to drive")
// }
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
const myAge = 25
// const yourAge = prompt("Enter your age")
// if (yourAge > myAge) {
//     const diff = yourAge - myAge
//     alert("You are " + diff + "years older than me")
// }
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 12
let b = 10
if (a > b) {
    console.log(a + " is greater than " + b);

} else {
    console.log(a + " is less than " + b);

}
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// const num = prompt('Enter a number')
// if (num % 2 === 0) {
//     alert(num + " is even")

// } else {
//     alert(num + " is odd")

// }
// Write a code which can give grades to students according to theirs scores:
// const grade = Number(prompt('Enter the scores'))
// if (grade >= 80 || grade === 100) {
//     alert("A")

// } else if (grade >= 70 || grade <= 89) {
//     alert("B")

// }
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is 
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// const checkSeason = prompt("Enter the month")
// switch (checkSeason) {
//     case 'september':
//         alert("Autumn")
//         break
//     case 'october':
//         alert("Autumn")
//         break
//     case 'november':
//         alert("Autumn")
//         break
//     case 'december':
//         alert("winter")
//         break
//     case 'january':
//         alert("winter")
//         break
//     case 'february':
//         alert("february")
//     case 'march':
//         alert("spring")
//     case 'april':
//         alert("spring")
//     case 'may':
//         alert("spring")
//         break
//     case 'june':
//         alert("summer")
//         break
//     case 'july':
//         alert("summer")
//         break
//     case 'august':
//         alert('summer')
//         break

// }
// Check if a day is weekend day or a working day. Your script will take day as an input.
// const day = prompt("Enter the day")
// switch (day) {
//     case "monday":
//         alert('monday is a working day')
//         break
//     case "tuesday":
//         alert("tuesday is a working day")
//         break
//     case "wednesday":
//         alert('wednesday is a working day')
//         break
//     case "thursday":
//         alert("thursday is a working day")
//         break
//     case "friday":
//         alert('friday is a working day')
//         break
//     case 'saturday':
//         alert("saturday is a weekend")
//         break
//     case 'sunday':
//         alert("sunday is a weekend")
//         break


// }
// Exercise Level 2
// Write a program which tells the number of days in a month.
const month = prompt("Enter the month")
switch (month) {
    case 'january':
        alert("january has 31 days")
        break
    case 'february':
        alert("february has 28 days")
        break
    case 'march':
        alert("march has 31 days")
        break
    case 'april':
        alert('april has 30 days')
        break
    case 'may':
        alert('may has 31 days')
        break
    case 'june':
        alert('june has 31 days')
        break
    case 'july':
        alert("july has 31 days")
        break
    case 'august':
        alert("august has 31 days")
        break
    case 'september':
        alert("september has 31 days")
        break
    case 'october':
        alert("october has 31 days")
        break
    case 'november':
        alert("november has 30 days")
        break
    case 'december':
        alert('december has 31 days')
        break

}
