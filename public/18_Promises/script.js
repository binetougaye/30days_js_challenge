// Exercise Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all'
const fetchCountries = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.error(err)
    }
}

fetchCountries()
// Exercise Level 2
// Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchCats = async () => {
    try {
        const response = await fetch(catsAPI)
        const catNames = await response.json()
        console.log(catNames)
    } catch (err) {
        console.error(err)
    }
}

fetchCats()