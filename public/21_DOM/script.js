// Exercise 1
// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const para = document.querySelectorAll("p")
// console.log(para[0]);
// 
const getByTag = document.getElementsByTagName("p")
// console.log(getByTag[0]);

// Get each of the the paragraph using document.querySelector('#id') and by their id
const para1 = document.querySelector("#p1")
const para2 = document.querySelector("#p2")
const para3 = document.querySelector("#p3")
const para4 = document.querySelector("#p4")
console.log(para1, para2, para3, para4);
// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name


// Loop through the nodeList and get the text content of each paragraph
para.forEach((item, index) => {
    console.log(item.textContent);

})
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph

// para[3].textContent = 'Fourth Paragraph'
// Set id and class attribute for all the paragraphs using different attribute setting methods
para.forEach((item, index) => {
    item.classList.add("para")


})
// para[1].setAttribute("test")
// Exercise Level 2
// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
para.forEach((item, index) => {
    item.style.backgroundColor = "orange"
    item.style.border = "2px solid maroon"
    item.style.fontSize = "24px"
    item.style.fontFamily = "Helvetica"


})
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// Set text content, id and class to each paragraph
para.forEach((item, index) => {
    item.classList.add("item")
    item.id = index
    if (index % 2 === 0) {
        item.style.color = 'green'
    } else {
        item.style.color = 'red'
    }

})
// Exercise Level 3
// Get elements
const container = document.querySelector(".wrapper")
const titleNiveau2 = document.querySelector(".title")
const span = document.querySelector("#span")
const listItems = document.querySelector(".listContainer")
const items = document.querySelector(".listContainer li")
console.log(container, titleNiveau2);


// 
container.style.display = "flex"
container.style.justifyContent = "center"
container.style.alignItems = "center"
titleNiveau2.style.textAlign = "center"
titleNiveau2.style.textDecoration = "underline"
listItems.style.listStyle = "none"

span.style.fontSize = "64px"
let timer = setInterval(() => {

    clearInterval(timer)
},)
