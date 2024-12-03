// Exercise Level 1
// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("firstName", "Fatou Binetou")
localStorage.setItem("lastName", "Gaye")
localStorage.setItem("age", "26")
localStorage.setItem("country", "Senegal")
localStorage.setItem("city", "Dakar")
// Exercise Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    firstName: 'Mahmoud',
    lastName: 'Barry',
    age: 25,
    skills: ["Python", "JavaScript", "DevOps"],
    country: "Senegal",
    city: "Dakar"
}
const studentJson = JSON.stringify(student)
console.log(studentJson);
localStorage.setItem("student", studentJson)
// Exercise Level 3
const getData = JSON.parse(localStorage.getItem("student"))
console.log(getData);
document.write(getData.firstName)
