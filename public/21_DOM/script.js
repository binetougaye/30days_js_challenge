// get elements
const container = document.querySelector(".wrapper")
const span = document.getElementById("span")
const title = document.querySelector(".title")
const listContainer = document.querySelectorAll(".listContainer li")
const coming = document.querySelectorAll(".coming")
const going = document.getElementById("ongoing")
const done = document.getElementById("done")
const time = document.getElementById("time")
const heure = document.getElementById("heure")
const minute = document.getElementById("minute")
const seconde = document.getElementById("seconde")
const jour = document.getElementById("day")
const an = document.getElementById("year")
const dateContainer = document.querySelector(".time")
const bg = document.querySelector(".time")


// Apply Styles
container.style.display = "flex"
container.style.justifyContent = "center"
// 
title.style.textDecoration = "underline"
title.style.textAlign = "center"
// 
listContainer.forEach((item) => item.style.listStyle = "none")
// 
span.style.fontSize = "50px"
// Logic
const colors = ["red", "yellow", "green", "orange", "maroon", "aqua", "gray", "pink"]
function changeYearColor() {
    for (let i = 0; i <= colors.length; i++) {
        setTimeout(() => {
            span.style.color = colors[i]
        }, i * 1000)
    }


}
setInterval(changeYearColor, 1000);
// Get the date and time
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 'October', "November", 'December']
const bgColor = ["crimson", "salmon", "lavender", "azure", "silver", "slate"]
function updateClock() {
    const date = new Date()
    const heures = date.getHours()
    const minutes = date.getMinutes()
    const secondes = date.getSeconds()
    const month = date.getMonth()
    const day = date.getDay()
    const year = date.getFullYear()
    heure.textContent = heures


    // Conditions
    if (heures < 10) {
        heure.textContent = "0" + heures
    } else {
        heure.textContent = heures + ':'
    }
    if (minutes < 10) {
        minute.textContent = "0" + minutes
    } else {
        minute.textContent = minutes + ':'
    }
    if (secondes < 10) {
        seconde.textContent = "0" + secondes
    } else {
        seconde.textContent = secondes
    }

    time.textContent = months[month]
    jour.textContent = day
    an.textContent = year
    for (let i = 0; i <= bgColor.length; i++) {
        setTimeout(() => {
            bg.style.backgroundColor = colors[i]
        }, i * 2000)
    }




}
setInterval(updateClock, 1000)
// 
coming.forEach((com) => com.style.backgroundColor = "red")
going.style.backgroundColor = "yellow"
done.style.backgroundColor = "green"



