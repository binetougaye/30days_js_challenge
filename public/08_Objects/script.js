// Exxercise Level 1
// Create an empty object called dog
// const dog = {}
// Print the the dog object on the console
// console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

const dog = {
    name: 'Shiwawa',
    legs: 'idk',
    color: "white",
    age: 4,
    bark: function () {
        return "woof woof"
    }
}
// Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog.legs, dog.color, dog.bark());
// Set new properties the dog object: breed, getDogInfo
dog.breed = "test"
dog.getDogInfo = "like cheese"
console.log(dog);
// Exercise Level 2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// Find the person who has many skills in the users object.
let mostSkilledPerson = '';
let maxSkills = 0;

for (const user in users) {
    console.log(users[user].skills);
    if (users[user].skills.length > maxSkills) {
        maxSkills = users[user].skills.length;
        mostSkilledPerson = user;
    }

}
console.log(mostSkilledPerson);
// Count logged in users, count users having greater than equal to 50 points from the following object.

let mostPointsUser = '';
let count = 0;

for (const user in users) {
    console.log(users[user].points);
    if (users[user].points > count) {
        count = users[user].points;
        mostPointsUser = user;
    }

}
console.log(mostPointsUser);

let mernStackDev = '';




for (const user in users) {
    const elements = users[user].skills;

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].toLowerCase().includes("mongo") ||
            elements[i].toLowerCase().includes("express") ||
            elements[i].toLowerCase().includes("react") ||
            elements[i].toLowerCase().includes("node")) {
            mernStackDev = user;
        }
    }
}

console.log(mernStackDev);

// Get all keys or properties of users object
const getKeys = Object.keys(users)
console.log(getKeys);
// Get all the values of users object
const getValues = Object.values(users)
console.log(getValues);

