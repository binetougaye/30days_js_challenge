// Exercise Level 1
// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const texte = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const patterns = /\d+/g
const getNumbers = texte.match(patterns)
console.log(getNumbers);
const totalSalaryAnnual = Number(getNumbers[0] * 12)
console.log(totalSalaryAnnual);
const totalOnlineCourses = Number(getNumbers[2] * 12)
const annualBonus = Number(getNumbers[1])
const totalAnnualIncome = Number(totalSalaryAnnual + totalOnlineCourses + annualBonus)
console.log(totalAnnualIncome + "€");
// Write a pattern which identify if a string is a valid JavaScript variable
const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/

// Exercise Level 2
function tenMostFrequentWords(str) {
    const words = str.toLowerCase().split(/\s+/);
    const wordCount = {};
    words.forEach(word => {
        word = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
        if (word) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });
    const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

    const mostFrequentWords = sortedWords.slice(0, 10).map(entry => entry[0]);

    return mostFrequentWords;
}

console.log(tenMostFrequentWords("hello world, hello world! Hello!"));

// Exercise level 3
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleanSentence = sentence.replace(/[%@#;&$]/g, "");
console.log(cleanSentence);

