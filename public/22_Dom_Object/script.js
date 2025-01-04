const container = document.querySelector(".container")


// display odd and even numbers
// for (let index = 0; index < 102; index++) {
//     const divElement = document.createElement('div')
//     container.appendChild(divElement)
//     divElement.textContent = index
//     if (index % 2 === 0) {
//         divElement.style.backgroundColor = 'green'

//     } else {
//         divElement.style.backgroundColor = 'yellow'
//     }

// }
// Display countries
const api = 'https://restcountries.com/v3.1/all'
async function getCountries() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        const divElement = document.createElement('div')
        container.appendChild(divElement)
        divElement.textContent = data?.map((item, index) => item.name.common)

    } catch (error) {
        console.log(error);

    }




}
getCountries()