// get elements
const container = document.querySelector(".wrapper")
const span = document.getElementById("span")
const title = document.querySelector(".title")
const listContainer = document.querySelectorAll(".listContainer li")
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
const colors = ["red", "yellow", "green", "orange", "maroon", "aqua"]

function changeYearColor() {
    for (let i = 0; i < colors.length; i++) {
        setTimeout(() => {
            span.style.color = colors[i]
        }, i * 1000)
    }


}
setInterval(changeYearColor, colors.length * 1000);
changeYearColor()
