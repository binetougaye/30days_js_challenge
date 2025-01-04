const container = document.querySelector(".container")


// display odd and even numbers
for (let index = 0; index < 102; index++) {
    const divElement = document.createElement('div')
    container.appendChild(divElement)
    divElement.textContent = index
    if (index % 2 === 0) {
        divElement.style.backgroundColor = 'green'

    } else {
        divElement.style.backgroundColor = 'yellow'
    }

}