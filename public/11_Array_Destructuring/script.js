// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor);
// Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
let {
    width,
    height,
    area,
    perimeter,
} = rectangle
// Exercises: Level 2
// Iterate through the users array and get all the keys of the object using destructuring
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]
users.map(({ name, scores, skills, age }) => console.log(name, scores, skills, age))
// Find the persons who have less than two skills
let person = ""
users.map(({ skills, name }) => {
    if (skills.length < 2) {
        console.log(name);
    }

})
// Exercises: Level 3
// Destructure the countries object print name, capital, population and languages of all countries
const country = [
    {
        name: 'Finland',
        capital: 'Helsinki',
        population: 5540720,
        languages: ['Finnish', 'Swedish']
    },
    {
        name: 'Sweden',
        capital: 'Stockholm',
        population: 10353442,
        languages: ['Swedish']
    },
    {
        name: 'Norway',
        capital: 'Oslo',
        population: 5379475,
        languages: ['Norwegian']
    }
];
let [nom,
    capital,
    population,
    languages,
] = country
console.log(nom, capital, population, languages);
// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// Déstructuration avancée
const [noms, skills, [htmlScore, cssScore, jsScore, reactScore]] = student;
console.log(noms, skills, jsScore, reactScore);
// Copy the student object to newStudent without mutating the original object. In the new object add the following 
const newStudent = [...student]

// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

const frontEnd = [
    { skill: 'HTML', level: 10 },
    { skill: 'CSS', level: 9 },
    { skill: 'JavaScript', level: 8 },
    { skill: 'React', level: 8 }
];
const backEnd = [
    { skill: 'Node', level: 7 },
    { skill: 'GraphQL', level: 8 },
]

frontEnd.push({ skill: 'Bootstrap', level: 8 });
backEnd.push({ skill: 'Express', level: 9 }, { skill: 'SQL', level: 8 })
console.log(frontEnd);
newStudent.push(frontEnd, backEnd)
console.log(newStudent);








